import { useState } from 'react';
import { FlatList, View } from 'react-native';
import UserStory from './UserStory';

import { userStoryData } from '../utils/userStoriesData';

const StoriesContainer = () => {
  const storiesPerPage = 4;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState(
    userStoryData.slice(0, storiesPerPage)
  );

  const pagination = (nextPage) => {
    const firstStory = (nextPage - 1) * storiesPerPage; // getting first story for next page
    if (firstStory > userStoryData.length) return [];
    setPage(nextPage);
    return userStoryData.slice(firstStory, firstStory + storiesPerPage);
  };

  return (
    <View style={{ paddingHorizontal: 28, marginTop: 12 }}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoading && stories.length < userStoryData.length) {
            setIsLoading(true);
            setStories((stories) => [...stories, ...pagination(page + 1)]);
            setIsLoading(false);
          }
        }}
        horizontal={true}
        data={stories}
        renderItem={({ item }) => {
          return <UserStory {...item} />;
        }}
      />
    </View>
  );
};

export default StoriesContainer;
