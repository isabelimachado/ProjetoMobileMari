
import 'react-native-gesture-handler';

//importando navigation container -> conter as telas da navegação 

//IMPORTAR AS TELAS
import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import Carrinho from './screens/Carrinho';
import Feed from './screens/Feed'; //importando as telas
import Counter from './screens/Counter'; //import default: importa td dentro de uma biblioteca/componente
import Produtos from './screens/Produtos';

//----------ICONS
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; //simbolos no bottom do site EXPO ICONS
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';


//------------NAVEGAÇÕES
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//importar as navegações stack e bottom
function hometabs(){
  const Bottom = createBottomTabNavigator(); //criar uma função para conter todas as telas que vao aparecer dps do login

  return(
    
    <Bottom.Navigator
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

    }} //tipo os styles do bottom
  >
  
    <Bottom.Screen name="Home" component={Home} //chama a função que vai pra home la que foi importada
    options={{
        tabBarIcon: () => (
          <MaterialIcons name = "home" size={30} color= '#E486A2'/>
        ) //o icon do home
      }} 
    />
    <Bottom.Screen name='Feed' component={Feed} 
      options={{
        tabBarIcon: () => (
          <MaterialIcons name = "feed" size={30} color= '#E486A2'/>
        ) //msm coisa com as demais
      }}
    />

    <Bottom.Screen name='Counter' component={Counter} 
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name = "counter" size={30} color= '#E486A2'/>
        )
      }}
    />
    <Bottom.Screen name='Produtos' component={Produtos}
    options={{
      tabBarIcon: () => (
        <Entypo name="shop" size={30} color= '#E486A2'/>        )
    }}
    />

  
    <Bottom.Screen name='Carrinho' component={Carrinho}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="production-quantity-limits" size={30} color='#E486A2' />
          )
        }}
      />
    
  </Bottom.Navigator>
  )

}
const Stack = createStackNavigator(); //criando a navegação Stack com  uma constante

export default function App() {
  return ( //vai retornar a navegação stack, primeiro o login com o componente e dps o hometabs que eh os bottoms
     <NavigationContainer> 
        <Stack.Navigator> 
          <Stack.Screen  options={{headerShown:false}} name='login' component={Login}/>
          <Stack.Screen options={{headerShown:false}} name='Cadastro' component={Register}/>
          <Stack.Screen options={{headerShown:false}} name ='hometabs' component={hometabs}/>

        </Stack.Navigator> 
     </NavigationContainer> //stack. ... (navegação ou tela)
  );

}

