import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_Home } from './src/components/Screen_Home/Screen_Home';
import { NavigationContainer } from '@react-navigation/native';
import DichVanBan from './src/components/DichVanBan/DichVanBan';
import UngDungHocTiengAnhKhac from './src/components/UngDungHocTiengAnhKhac/UngDungHocTiengAnhKhac';
import DongTuBatQuyTac from './src/components/DongTuBatQuyTac/DongTuBatQuyTac';
import TuVungToeic from './src/components/TuVungToeic/TuVungToeic';
import TuVungIELTS from './src/components/TuVungIELTS/TuVungIELTS';
import CaiDat from './src/components/CaiDat/CaiDat';
import { WordDetail } from './src/components/Word_Detail/WordDetail';

const Stack= createNativeStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='tuVungToeic'>
        <Stack.Screen 
          name="DongTuBatQuyTac" 
          component={DongTuBatQuyTac}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="WordDetail" 
          component={WordDetail}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TuVungIELTS" 
          component={TuVungIELTS}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TuVungToeic" 
          component={TuVungToeic}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="CaiDat" 
          component={CaiDat}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="DichVanBan" 
          component={DichVanBan}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <DichVanBan/>
    // <UngDungHocTiengAnhKhac/>
    // <DongTuBatQuyTac/>
    // <TuVungToeic/>
    // <TuVungIELTS/>
    // <CaiDat/>
    // <WordDetail/>
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
