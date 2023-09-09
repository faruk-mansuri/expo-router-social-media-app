import { useUser } from '@clerk/clerk-expo';
import { View, Text } from 'react-native';
import UserProfileImage from './UserProfileImage';
import img from '../assets/images/img3.jpg';

const ProfileHeader = () => {
  const { user } = useUser();
  return (
    <View style={{ alignItems: 'center', paddingVertical: 10 }}>
      <UserProfileImage image={img} width={120} height={120} />
      <Text
        style={{
          fontFamily: 'Inter_500Medium',
          fontSize: 20,
          marginTop: 20,
        }}
      >
        {user?.firstName || 'user'}
      </Text>
    </View>
  );
};

export default ProfileHeader;
