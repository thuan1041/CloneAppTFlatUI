import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_Home } from './src/components/Screen_Home/Screen_Home';
import { NavigationContainer } from '@react-navigation/native';


const Stack= createNativeStackNavigator();

export default function App() {
  return (

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
