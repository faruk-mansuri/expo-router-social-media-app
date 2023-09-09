import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name='log-out-outline' size={24} color={'#fff'} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='home-outline'
              size={size}
              color={focused ? '#F35BAC' : color}
            />
          ),
          tabBarLabel: 'Home',
          headerShown: false,
        }}
        redirect={!isSignedIn}
      />

      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='person-outline'
              size={size}
              color={focused ? '#F35BAC' : color}
            />
          ),
          tabBarLabel: 'My Profile',
          headerShown: false,
        }}
        redirect={!isSignedIn}
      />

      <Tabs.Screen
        screenOptions={{ headerShown: true }}
        name='setting'
        options={{
          headerTitle: 'setting',

          headerStyle: { backgroundColor: '#F35BAC' },
          headerTintColor: '#fff',

          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='settings'
              size={size}
              color={focused ? '#F35BAC' : color}
            />
          ),
          tabBarLabel: 'setting',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
