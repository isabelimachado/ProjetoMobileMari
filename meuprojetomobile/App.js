
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import Login from './screens/Login'
import Feed from './screens/Feed';
import Counter from './screens/Counter';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

import { createStackNavigator  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-web';

function hometabs(){
  const bottom = createBottomTabNavigator();

  return(
    
    <bottom.Navigator
    screenOptions={{
      animation:'fade',
      bottomStyle: {
        headerTitleStyle: {fontWeight: 'bold', fontSize: 20}, 
        backgroundColor: '#f0f0f0', 
        width: 250, 
      },
      bottomActiveBackgroundColor: '#DB7593', 
      bottomActiveTintColor: '#fff', 
      bottomInactiveTintColor: '#000',
      headerStyle: {
        backgroundColor: '#E486A2',
      },
      headerTintColor: '#fff',  
      tabBarActiveTintColor:'#000',
      tabBarActiveBackgroundColor:'#f0f0f9'          

    }}
  >
  
    <bottom.Screen name="Home" component={Home}
    options={{
        tabBarIcon: () => (
          <MaterialIcons name = "home" size={30} color= '#E486A2'/>
        )
      }} 
    />
    <bottom.Screen name='Feed' component={Feed} 
      options={{
        tabBarIcon: () => (
          <MaterialIcons name = "feed" size={30} color= '#E486A2'/>
        )
      }}
    />

    <bottom.Screen name='Counter' component={Counter} 
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name = "counter" size={30} color= '#E486A2'/>
        )
      }}
    />
  </bottom.Navigator>
  )

}
const stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
        <stack.Navigator>
          <stack.Screen options={{headerShown:false}} name='login' component={Login}/>
          <stack.Screen options={{headerShown:false}} name ='hometabs' component={hometabs}/>
        </stack.Navigator>
     </NavigationContainer>
  );

}

