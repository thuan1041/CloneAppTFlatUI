import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_Home } from './src/components/Screen_Home/Screen_Home';
import { NavigationContainer } from '@react-navigation/native';
import { Recent_Words } from './src/components/Recent_Words/Recent_Words';
import { Your_Words } from './src/components/Your_Words/Your_Words';
import { Account } from './src/components/Account/Account';
import { VietAnh_Dictionary } from './src/components/VietAnh_Dictionary/VietAnh_Dictionary';
import { Vip_Practice } from './src/components/VIP_Practice/Vip_Practice';
import { VIP_SGK } from './src/components/VIP_SGK/VIP_SGK';
import { VIP_SGKNEW } from './src/components/VIP_SGKNEW/VIP_SGKNEW';
import { Translate_Dictionary } from './src/components/Translate_Dictionary/Translate_Dictionary';


const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
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

        <Stack.Screen
          name="VietAnh_Dictionary"
          component={VietAnh_Dictionary}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Vip_Practice"
          component={Vip_Practice}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="VIP_SGK"
          component={VIP_SGK}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="VIP_SGKNEW"
          component={VIP_SGKNEW}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Translate_Dictionary"
          component={Translate_Dictionary}
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
