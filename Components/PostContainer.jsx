import { useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { postData } from '../utils/userPostData';
import SingleUserPost from './SingleUserPost';

export const PostContainer = () => {
  const postLimit = 2;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(postData.slice(0, postLimit));

  const pagination = (nextPage) => {
    const firstPost = (nextPage - 1) * postLimit;
    if (firstPost > postData.length) return [];
    setPage(nextPage);
    return postData.slice(firstPost, firstPost + postLimit);
  };

  return (
    <View
      style={{
        marginTop: 30,
        paddingHorizontal: 24,
        flex: 1,
      }}
    >
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={async () => {
          if (!isLoading && post.length < postData.length) {
            setIsLoading(true);

            // if want to show loading uncomment this
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 100);
            });

            setPost((post) => [...post, ...pagination(page + 1)]);
            setIsLoading(false);
          }
        }}
        data={post}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SingleUserPost {...item} />;
        }}
      />
      {isLoading && (
        <ActivityIndicator
          size='large'
          color='#F35BAC'
          style={{ marginVertical: 10 }}
        />
      )}
    </View>
  );
};

export default PostContainer;
