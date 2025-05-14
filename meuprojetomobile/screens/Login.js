import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../Controller";
import { useState } from 'react';

//precisa do navigation como propriedade
export default function Login({navigation}) {
    const [email, setemail] = useState("");
    const [senha, setSenha] = useState("");

    const VerificarUser = () => {
        signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
            console.log("usuario logado", userCredential.user.email)
            navigation.navigate('hometabs');
        })
        .catch((error) => {
            console.log('erro ao logar', error.message);
        });
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.texto1}><b>Tela de login PetShop</b></Text>
            
            <View>
                <Text style={styles.texto2}>EMAIL</Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={setemail}

                />
            </View>

            <View>
                <Text style={styles.texto2}>SENHA</Text>
                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setSenha}

                />
            </View>

            <View style={styles.botao}>
                <TouchableOpacity onPress={VerificarUser} color="#ff69c4" >
                <Text style={styles.textoBotao}>logar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.botao}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} color="#ff69c4" >
                <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

//hometabs -> função/componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcbdb',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    texto1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
        textAlign: 'center',
        fontFamily:"Arial Narrow"
    },

    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
        fontSize: 16,
    },

    botao: {
        backgroundColor: '#ff69b4',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 10,
    },

    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: "Arial Narrow"
    },

    texto2:{
        fontSize:15,
    }
});