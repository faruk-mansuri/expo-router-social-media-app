import { Stack } from 'expo-router';

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F35BAC',
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name='login'
        options={{
          headerTitle: 'Clerk Auth App',
        }}
      ></Stack.Screen>
      <Stack.Screen
        name='register'
        options={{
          headerTitle: 'Create Account',
        }}
      ></Stack.Screen>
      <Stack.Screen
        name='reset'
        options={{
          headerTitle: 'Reset Password',
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
