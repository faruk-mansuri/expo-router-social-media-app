import { Text, View, Image } from 'react-native';
import UserProfileImage from './UserProfileImage';

const UserStory = ({ firstName, image }) => {
  return (
    <View style={{ marginRight: 20 }}>
      <UserProfileImage image={image} />

      <Text
        style={{
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 14,
          marginTop: 5,
        }}
      >
        {firstName}
      </Text>
    </View>
  );
};

export default UserStory;
