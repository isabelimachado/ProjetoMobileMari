import { Text, View, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'; 
import { ImageBackground, ScrollView, TextInput } from 'react-native-web';
import { useState } from 'react';

export default function Counter(){
    const [contador, SetContador] = useState(0)
    function Aumentar(){
        SetContador(contador + 1)
    }

    function Diminuir(){
        if (contador > 0){
            SetContador(contador - 1)
        }
        
    }
    return(
        <View style={styles.container}>
            
            <Text style={styles.title}><br></br><b>Contador da isabeli</b></Text>
            <br></br><br></br>
            <Text style={styles.texto}>Contador: {contador}</Text>


            <View style={styles.botoes}>
                <TouchableOpacity
                style={{backgroundColor:'#ff7dbe',borderWidth:0.5,borderRadius:20,width:80,height:50,textAlign:'center',margin:'auto',fontSize:30,color:'#fffafc',borderColor:'#ff7dbe'}}
                title='+'
                
                onPress={Aumentar}
                >+
                </TouchableOpacity>

                <TouchableOpacity 
                style={{backgroundColor:'#ff7dbe',borderWidth:0.5,borderRadius:20,width:80,height:50,textAlign:'center',margin:'auto',fontSize:30,color:'#fffafc',borderColor:'#ff7dbe'}}
                title='-'
                
                onPress={Diminuir}
                >-
                </TouchableOpacity>
            </View>

            <View style={styles.viewinput}>
            <TextInput
                placeholder='Nome'
                style={styles.input}
            />

            <TextInput
                placeholder='Email'
                style={styles.input}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffcbdb'
    },

    botoes:{
        alignItems:'center',
        flex:0.2,
        flexDirection:'row',
        margin:'auto',
        backgroundColor: '#ffcbdb',
        width:300,
        height:200,
        
    },
    title:{
        fontSize: 40,
        color: "#000",
    },

    imagem:{
        height:300,
        width:300,
        borderRadius:30
    },

    texto:{
        fontSize:24,
        textAlign: 'center'
    },

    viewinput:{
        textAlign: 'center',
        // backgroundColor:'orange',
        height:'20%',
        justifyContent: 'space-around'
    },

    input:{
        fontSize:20,
    }


}) 