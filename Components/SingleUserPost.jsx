import { View, Image } from 'react-native';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const SingleUserPost = ({
  userImg,
  firstName,
  lastName,
  location,
  likes,
  comments,
  bookmarks,
  image: post,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#EFF2F6',
        marginVertical: 10,
        paddingBottom: 10,
      }}
    >
      {/* post header */}
      <PostHeader
        name={`${firstName} ${lastName}`}
        userImg={userImg}
        location={location}
      />

      <View
        style={{
          width: '100%',
          height: 250,
          borderRadius: 5,
          marginVertical: 16,
        }}
      >
        <Image
          source={post}
          resizeMode='cover'
          style={{ width: '100%', height: '100%', borderRadius: 5 }}
        />
      </View>

      {/* post footer */}
      <PostFooter likes={likes} comments={comments} bookmarks={bookmarks} />
    </View>
  );
};

export default SingleUserPost;
