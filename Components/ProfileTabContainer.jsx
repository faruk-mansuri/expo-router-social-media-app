import { View, StyleSheet, Text } from 'react-native';
import ProfileTabTitle from './ProfileTabTitle';

// profile tab navigator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const ProfileTabs = createMaterialTopTabNavigator();

import ProfileTab from './ProfileTab';

const ProfileTabContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <ProfileTabs.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            // backgroundColor: 'transparent',
            backgroundColor: '#F35BAC',
          },
          tabBarStyle: {
            // The elevation style is a way to create shadows and depth effects for views on Android.
            elevation: 0,
          },
        }}
      >
        <ProfileTabs.Screen
          name='tab1'
          component={ProfileTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <ProfileTabTitle isFocus={focused} title='photos' />
            ),
          }}
        />
        <ProfileTabs.Screen
          name='tab2'
          component={ProfileTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <ProfileTabTitle isFocus={focused} title='videos' />
            ),
          }}
        />
        <ProfileTabs.Screen
          name='tab3'
          component={ProfileTab}
          options={{
            tabBarLabel: ({ focused }) => (
              <ProfileTabTitle isFocus={focused} title='saved' />
            ),
          }}
        />
      </ProfileTabs.Navigator>
    </View>
  );
};

const style = StyleSheet.create({
  tab: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProfileTabContainer;
