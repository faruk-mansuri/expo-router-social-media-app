import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { View, Text } from 'react-native';
import UserProfileImage from './UserProfileImage';

const PostHeader = ({ name, userImg, location }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <UserProfileImage image={userImg} />

        <View>
          <Text
            style={{
              fontFamily: 'Inter_300Light',
              fontWeight: '500',
              fontSize: 16,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_300Light',
              fontWeight: '400',
              fontSize: 12,
              color: '#79869F',
            }}
          >
            {location}
          </Text>
        </View>
      </View>
      <FontAwesomeIcon icon={faEllipsisH} color='#79869F' size={22} />
    </View>
  );
};

export default PostHeader;
