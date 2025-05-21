import { Text, View, StyleSheet, Image,TextInput } from 'react-native'; 
import { ImageBackground } from 'react-native-web';
import imagemdefundo from '../assets/imagemdefundo.webp';

function Animais() {
    return(
        <View style={styles.animais}>
            <Image 
                style={styles.image1} 
                source={{uri: 'https://th.bing.com/th/id/OIP.HI6tnfEGiK-Zaz-cgwJNyQHaEv?rs=1&pid=ImgDetMain'}} />
            <Image
                style={styles.image2} 
                source={{uri: 'https://www.eurodicas.com.br/wp-content/uploads/2019/01/pet-shop-em-portugal.jpg'}} />
        </View>
    );
}

function Animais2() {
  return(
      <View style={styles.animais2}>
          <Image 
              style={styles.image1} 
              source={{uri: 'https://media.tenor.com/dkk2b8SGz-gAAAAM/botaabucetanareta-gato-thumbsup.gif'}} />
          <Image
              style={styles.image2} 
              source={{uri: 'https://media.tenor.com/-RIgatxz-KkAAAAM/cachorro.gif'}} />
      </View>
  );
}

export default function Home() { 
    return (
        <View style={styles.container}>
            <ImageBackground style={{flex:1,width:'100%', height:'100%'}} source ={imagemdefundo}>
            <Text style={styles.texto1}><b>PetShop Da Isa 🩷</b></Text>
            <Text style={styles.texto1}></Text>
            <Animais/>
            <Text style={styles.texto2}><b>Nossos Clientes :) </b></Text>
            <Animais2/>
            <Text style={styles.creditos}><b>Feito por Isabeli Machado</b></Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
    },
    
    creditos: {
      fontFamily: 'Arial Narrow',
      textAlign: 'center',
      fontSize: 30,
      top: 250,
      textAlign:'center',
      
    },
    
    texto1: {
      fontFamily: 'Arial Narrow',
      textAlign: 'center',
      fontSize: 30,
      top: 95,
      right:29,
      textAlign:'center'
    },
  
    texto2: {
      fontFamily: 'Arial Narrow',
      textAlign: 'center',
      fontSize: 30,
      top: 150,
      left:50,
      textAlign:'center'
    },
  
    animais2: {
      flexDirection:"row",
      alignSelf: "center",
      gap: 30,
      top:180
    },
  
    animais: {
      flexDirection:"row",
      alignSelf: "center",
      gap: 30,
      top:90
    },
  
    image1: { 
      width: 150, 
      height: 195,
      borderWidth: 3,
      borderRadius: 10,
      borderStyle: 'solid', 
    },
  
    image2: {
      width: 150, 
      height: 195,
      borderWidth: 3,
      borderRadius: 10,
      borderStyle: 'solid', 
    },
    
  });
