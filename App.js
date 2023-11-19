import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_Home } from './src/components/Screen_Home/Screen_Home';
import { NavigationContainer } from '@react-navigation/native';
import { Recent_Words } from './src/components/Recent_Words/Recent_Words';
import { Your_Words } from './src/components/Your_Words/Your_Words';
import { Account } from './src/components/Account/Account';

const Stack= createNativeStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Account'>
        <Stack.Screen 
          name="Home" 
          component={Screen_Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Recent_Words"
          component={Recent_Words}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Your_Words"
          component={Your_Words}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
