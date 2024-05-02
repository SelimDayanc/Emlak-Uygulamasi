import React from "react";
{
  /*
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
*/
}
import GirisEkrani from "C:/Users/MSI-PC/Desktop/Emlak/MyApp/GirisEkrani";
import DetayEkranı from "C:/Users/MSI-PC/Desktop/Emlak/MyApp/DetayEkranı";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GirisEkrani" component={GirisEkrani} />
        <Stack.Screen name="DetayEkranı" component={DetayEkranı} />aa
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
