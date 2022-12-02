import { StyleSheet, Text, View } from 'react-native';

import * as ExpoModuleWithExpoGl from 'expo-module-with-expo-gl';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoModuleWithExpoGl.hello()}</Text>
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
