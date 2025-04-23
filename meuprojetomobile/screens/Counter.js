import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'; //importando componentes nativos do react
import {TextInput } from 'react-native-web'; //importando componentes nativos do react web
import { useState } from 'react'; //usestate: valor inicial da variavel
//importação nomeada: {} -> importando algo especifico da biblioteca

export default function Counter(){
    const [contador, SetContador] = useState(0)
    const [Nome, SetNome] = useState("")
    const [Email, SetEmail] = useState("") //criando as constantes, primeiro o nome dela, eo setAlgumacoisa que eh o atualizador

    function Aumentar(){
        SetContador(contador + 1) //criando as funcoes de aumentar o contador e diminuir (sem incluir negativos)
    }

    function Diminuir(){
        if (contador > 0){ 
            SetContador(contador - 1)
        }
    }
    return( //retornar do counter --- pra coloca a variavel tem q ser em {}
        <View style={styles.container}>

            <Text style={styles.title}><br></br><b>Contador da isabeli</b></Text>
            <br></br><br></br> 
            <Text style={styles.texto}>Contador: {contador}</Text> 



            <View style={styles.botoes}>
                <TouchableOpacity
                style={{backgroundColor:'#ff7dbe',borderWidth:0.5,borderRadius:20,width:80,height:50,textAlign:'center',margin:'auto',fontSize:30,color:'#fffafc',borderColor:'#ff7dbe'}} //estilo dos botoes
                title='+'
                
                onPress={Aumentar} //se pressionar o botao vai la pra função
                >+
                </TouchableOpacity>

                <TouchableOpacity 
                style={{backgroundColor:'#ff7dbe',borderWidth:0.5,borderRadius:20,width:80,height:50,textAlign:'center',margin:'auto',fontSize:30,color:'#fffafc',borderColor:'#ff7dbe'}}
                title='-'
                
                onPress={Diminuir}
                >-
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center',backgroundColor: 'white',bottom:200}}>
            <TextInput
                placeholder='Nome'
                style={styles.input}
                value={Nome}
                onChangeText={SetNome}
            />

            <TextInput
                placeholder='Email'
                style={styles.input}
                value={Email}
                onChangeText={SetEmail}
            />
            </View>
            <Text style={{bottom:150,fontSize:30,textAlign:'center',fontFamily: 'Arial Narrow',}}>Oi {Nome}, seu email é {Email}</Text>
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
        fontFamily: 'Arial Narrow',

    },

    imagem:{
        height:300,
        width:300,
        borderRadius:30
    },

    texto:{
        fontSize:24,
        textAlign: 'center',
        fontFamily: 'Arial Narrow',

    },

    viewinput:{
        textAlign: 'center',
        // backgroundColor:'orange',
        height:'20%',
        justifyContent: 'space-around',
        fontFamily: 'Arial Narrow',


    },

    input:{
        fontSize:20,
    }


}) 