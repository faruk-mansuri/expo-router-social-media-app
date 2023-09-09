import { Text } from 'react-native';

const ProfileTabTitle = ({ title, isFocus }) => {
  return (
    <Text
      style={{
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: isFocus ? '#022150' : '#79869F',
        fontWeight: isFocus ? '500' : '400',
      }}
    >
      {title}
    </Text>
  );
};

export default ProfileTabTitle;
