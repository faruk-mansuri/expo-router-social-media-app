import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

import { View, Pressable, Text } from 'react-native';

const PostFooter = ({ likes, comments, bookmarks }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 25 }}>
      <Pressable style={{ flexDirection: 'row', gap: 5 }}>
        <FontAwesomeIcon icon={faHeart} />
        <Text style={{ color: '#79869F' }}>{likes}</Text>
      </Pressable>

      <Pressable style={{ flexDirection: 'row', gap: 5 }}>
        <FontAwesomeIcon icon={faComment} />
        <Text style={{ color: '#79869F' }}>{comments}</Text>
      </Pressable>

      <Pressable style={{ flexDirection: 'row', gap: 5 }}>
        <FontAwesomeIcon icon={faBookmark} />
        <Text style={{ color: '#79869F' }}>{bookmarks}</Text>
      </Pressable>
    </View>
  );
};

export default PostFooter;
