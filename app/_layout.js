import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Slot, SplashScreen, Stack, useSegments, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key) {
    return SecureStore.getItemAsync(key);
  },
  async saveToken(key, value) {
    return SecureStore.setItemAsync(key, value);
  },
};

const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // if in case useAuth is not loaded

    const isTabGroup = segment[0] === '(auth)';
    if (isSignedIn && !isTabGroup) {
      router.replace('/home');
    } else if (!isSignedIn) {
      router.replace('/login');
    }
  }, [isSignedIn]);

  return <Slot />;
};

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter_300Light: require('../assets/fonts/Inter_300Light.ttf'),
    Inter_400Regular: require('../assets/fonts/Inter_400Regular.ttf'),
    Inter_500Medium: require('../assets/fonts/Inter_500Medium.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return;

  // const darkTheme = {
  //   ...DarkTheme,
  //   colors: {
  //     ...DarkTheme.colors,
  //     text: '#FFFFFF',
  //   },
  // };

  return (
    <ClerkProvider publishableKey={CLERK_KEY} tokenCache={tokenCache}>
      {/* <ThemeProvider value={colorScheme === 'dark' ? darkTheme : DefaultTheme}> */}
      {/* <ThemeProvider value={DefaultTheme}> */}
      <InitialLayout />
      {/* </ThemeProvider> */}
    </ClerkProvider>
  );
};

export default RootLayout;
