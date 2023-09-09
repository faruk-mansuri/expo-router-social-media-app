import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../Styles/globalStyles';
import { View } from 'react-native';
import {
  ProfileHeader,
  ProfileStats,
  ProfileTabContainer,
} from '../../Components';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundColor, { flex: 1 }]}>
      {/* profile Header */}
      <ProfileHeader />

      {/* profile stats */}
      <ProfileStats />
      <View
        style={{
          borderTopWidth: 1,
          marginVertical: 10,
          borderColor: '#EFF2F6',
          marginHorizontal: 28,
        }}
      ></View>

      {/* Profile Tab */}
      <ProfileTabContainer />
    </SafeAreaView>
  );
};

export default Profile;
