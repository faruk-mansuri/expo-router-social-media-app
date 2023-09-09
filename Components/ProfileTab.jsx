import { View, ScrollView, Image, FlatList } from 'react-native';
import { postData } from '../utils/userPostData';

const ProfileTab = () => {
  return (
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   style={{
    //     backgroundColor: '#fff',
    //   }}
    // >
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       flexWrap: 'wrap',
    //       padding: 10,
    //       justifyContent: 'center',
    //       gap: 10,
    //     }}
    //   >
    //     {postData.map((post) => {
    //       const { id, image } = post;
    //       return (
    //         <Image
    //           key={id}
    //           source={image}
    //           style={{ width: 150, height: 90, borderRadius: 5 }}
    //         />
    //       );
    //     })}
    //   </View>
    // </ScrollView>

    // or

    <View
      style={{
        paddingTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
    >
      <FlatList
        // columnWrapperStyle={{ justifyContent: 'center' }}
        data={postData}
        renderItem={({ item }) => {
          return (
            <Image
              source={item.image}
              style={{
                width: 150,
                height: 90,
                borderRadius: 5,
                margin: 5,
              }}
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

export default ProfileTab;

// Let me try to explain it differently. Imagine you have a box that can hold 10 balls. You can arrange the balls in different ways inside the box, for example, 2 rows and 5 columns, or 5 rows and 2 columns. The box has a label that tells you how many rows and columns there are. Now, if you want to change the arrangement of the balls, you have two options:

// Option 1: You keep the same box and the same label, and you just move the balls around inside the box. This is what happens when you change numColumns on the fly without changing the key prop. React native will try to reuse the same FlatList component and update its layout, but this will cause an error because numColumns is not supposed to change dynamically.
// Option 2: You get a new box and a new label, and you transfer the balls from the old box to the new one. This is what happens when you change numColumns and also change the key prop. React native will create a new FlatList component with the new layout and render it instead of the old one. This will avoid the error because you are not changing numColumns on the fly, but creating a new component with a different value of numColumns.
