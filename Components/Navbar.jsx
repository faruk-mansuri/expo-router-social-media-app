import { View } from 'react-native';

import Title from './Title';
import MessageIcon from './MessageIcon';

const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
      }}
    >
      <Title />
      <MessageIcon />
    </View>
  );
};

export default Navbar;
