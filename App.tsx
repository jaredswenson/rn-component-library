import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';
import { Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Nunito-400': Nunito_400Regular,
    'Nunito-600': Nunito_600SemiBold,
    'Nunito-700': Nunito_700Bold,
    'Nunito-900': Nunito_900Black,
  });

  if (!isLoadingComplete && fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
