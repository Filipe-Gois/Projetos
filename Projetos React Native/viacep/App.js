import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ContainerApp } from './style';

// Rest of the import statements
import { useFonts, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header';
import { Theme } from './theme';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium
  });


  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar backgroundColor={Theme.colors.yellowColor} translucent style={'auto'} />
      {/* header */}
      {/* homescreen */}

      <Header />


    </ContainerApp>
  );
}

