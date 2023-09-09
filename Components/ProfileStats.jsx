import { View, Text, StyleSheet } from 'react-native';

const ProfileStats = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View style={[style.statsContainer, style.borderStyle]}>
        <Text style={style.number}>45</Text>
        <Text style={style.statsText}>following</Text>
      </View>
      <View style={[style.statsContainer, style.borderStyle]}>
        <Text style={style.number}>30M</Text>
        <Text style={style.statsText}>followers</Text>
      </View>
      <View style={[style.statsContainer]}>
        <Text style={style.number}>97</Text>
        <Text style={style.statsText}>posts</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  statsContainer: {
    paddingHorizontal: 18,
  },
  borderStyle: {
    borderRightWidth: 1,
    borderColor: '#79869F',
  },
  number: { textAlign: 'center', fontWeight: '600', fontSize: 20 },
  statsText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#79869F',
    marginTop: 6,
  },
});

export default ProfileStats;
