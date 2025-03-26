
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import Home from './screens/Home'
import Login from './screens/Login'


export default function App() {
  const Bottom = createBottomTabNavigator();
  return (
     <NavigationContainer>
      <Bottom.Navigator>
        <Bottom.Screen name = 'Login' component={Login}/>
        <Bottom.Screen name = 'Home' component={Home} />
      </Bottom.Navigator>
     </NavigationContainer>
  );
}
