import { Image, View } from 'react-native';

const UserProfileImage = ({ image, width, height }) => {
  return (
    <View
      style={{
        width: width || 60,
        height: height || 60,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#F35BAC',
        padding: 3,
      }}
    >
      <Image
        source={image}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 100,
        }}
      />
    </View>
  );
};

export default UserProfileImage;
