import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Main from './Main'
import Swiper from 'react-native-swiper';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <Home />
        <Main />

      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'

  }
});
