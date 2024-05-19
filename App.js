import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  console.log("wlcome")
  return (
    <View style={styles.container}>
      <Text>Neoker 587 Bienvenido  your app here we go.</Text>
      <Image 
      source= {{
        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
      }}
      style={{width: 200, height:200}}
      />
      <Text>hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
