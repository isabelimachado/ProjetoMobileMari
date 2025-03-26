
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home'
import Login from './screens/Login'


export default function App() {
  const Drawer = createDrawerNavigator();
  return (
     <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f0f0f0', 
            width: 250, 
          },
          drawerActiveBackgroundColor: '#DB7593', 
          drawerActiveTintColor: '#fff', 
          drawerInactiveTintColor: '#000',
          headerStyle: {
            backgroundColor: '#E486A2',
          },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
     </NavigationContainer>
  );
}
