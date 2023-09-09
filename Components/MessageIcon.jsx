// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { Text, Pressable, View } from 'react-native';

const MessageIcon = () => {
  return (
    <Pressable
      style={{ backgroundColor: '#f9e5f0', padding: 12, borderRadius: 100 }}
    >
      <FontAwesomeIcon icon={faEnvelope} size={20} color='#222' />

      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: '#F35BAC',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          top: -10,
          right: 0,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}
        >
          2
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageIcon;
