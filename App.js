import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg from './assets/bg.png';
import { BlurView } from "@react-native-community/blur";

export default function App() {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <BlurView
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View
      style={{
        height: 110,
        width: 73,
        borderRadius: 200/2,
        backgroundColor: '#7030DF',
        transform: [{rotateZ: '70deg'}],
        position: 'absolute',
        bottom: -30,
        left: -10,
      }}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
