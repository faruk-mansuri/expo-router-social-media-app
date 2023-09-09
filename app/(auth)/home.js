import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Navbar, PostContainer, StoriesContainer } from '../../Components';
import { globalStyles } from '../../Styles/globalStyles';

const Home = () => {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
        },
        globalStyles.backgroundColor,
      ]}
    >
      <Navbar />
      <StoriesContainer />
      <PostContainer />
    </SafeAreaView>
  );
};

export default Home;
