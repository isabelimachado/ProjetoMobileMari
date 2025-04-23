import { Text, View, StyleSheet, Image,Button } from 'react-native'; 

export default function Feed(){
    return(
        <View style={styles.container}>
            
            <Text style={styles.texto}>
            Às vezes, tudo o que precisamos é de uma pausa. Respire, observe ao seu redor e lembre-se: a vida é feita de pequenos momentos. <br></br>Aproveite o agora! 
            </Text>
            
            <Text style={styles.texto}>
            ✨ #VivaOAgora #PausaParaRefletir #PequenosMomentos
            </Text>

            <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/originals/86/79/01/867901fccbf95ae6670d15a350565b6c.gif'}}></Image>

            <Button
            title='Saiba Mais'
            fontFamily='Arial Narrow'
            color={'#ff69b4'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffcbdb',
    },
    title:{
        fontSize: 50,
        color:'#ffcbbc'
    },

    imagem:{
        height:300,
        width:300,
        borderRadius:30
    },

    texto:{
        fontSize:24,
        fontFamily: 'Arial Narrow',
        fontWeight:30,
        justifyContent:'center',
        textAlign:'center'

    }
}) 