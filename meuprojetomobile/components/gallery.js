import { Text, View, StyleSheet, Image } from 'react-native'; 

function Profile() {
    return(
        <View style={styles.images}>
            <Image 
                style={styles.image1} 
                source={{uri: 'https://media1.tenor.com/images/c93636f2f5d97e25a0ab735022877c0e/tenor.gif?itemid=17178085'}} />
            <Image
                style={styles.image2} 
                source={{uri: 'https://media.tenor.co/images/28ed9a9cf9f01100f363edc0cc464fd5/raw'}} />
        </View>
    );
}

function Cachorros() {
  return(
      <View style={styles.images2}>
          <Image 
              style={styles.image1} 
              source={{uri: 'https://cdn.dicionariopopular.com/imagens/cachorro-sorrindo.gif'}} />
          <Image
              style={styles.image2} 
              source={{uri: 'https://media.tenor.com/-RIgatxz-KkAAAAM/cachorro.gif'}} />
      </View>
  );
}

export default function Gallery() { 
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>gatinhos :)</Text>
            <Text style={styles.texto1}></Text>
            <Profile/>
            <Text style={styles.texto2}>cachorros :)</Text>
            <Cachorros/>
            <Text style={styles.creditos}>Isabeli Machado - 3137 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ACE00',

  },

  creditos: {
    fontFamily: 'Arial Narrow',
    textAlign: 'center',
    fontSize: 40,
    top: 300,
    textAlign:'center',
    
  },
  
  texto1: {
    fontFamily: 'Arial Narrow',
    textAlign: 'center',
    fontSize: 40,
    top: 95,
    right:90,
    textAlign:'center'
  },

  texto2: {
    fontFamily: 'Arial Narrow',
    textAlign: 'center',
    fontSize: 40,
    top: 150,
    left:95,
    textAlign:'center'
  },

  images: {
    flexDirection:"row",
    alignSelf: "center",
    gap: 30,
    top:100
  },

  images2: {
    flexDirection:"row",
    alignSelf: "center",
    gap: 30,
    top:150
  },

  image1: { 
    width: 150, 
    height: 195,
    borderWidth: 3,
    borderColor: '#006400', 
    borderRadius: 2,
    borderStyle: 'solid', 
  },

  image2: {
    width: 150, 
    height: 195,
    borderWidth: 3,
    borderColor: '#006400', 
    borderRadius: 2,
    borderStyle: 'solid', 
  },
  
});
