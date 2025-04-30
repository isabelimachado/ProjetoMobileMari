import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../Controller";


//precisa do navigation como propriedade
export default function Cadastro({navigation}) {
    const [email, setemail] = useState("");
    const [senha, setSenha] = useState("");

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email,senha).then((userCredential) => {
            console.log("cadastro!", userCredential.user.email);
            navigation.navigate('login');
          })
          .catch((error) => {
            console.log("erro", error.message);           
          });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Cadastro PetShop</Text>
    
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={setemail}
            />
    
            <TextInput
                placeholder='Senha'
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
    
            <TouchableOpacity style={styles.botao} onPress={cadastroUser}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}  onPress={() => navigation.navigate('login')} color="#ff69c4" >
                <Text style={styles.textoBotao}>Voltar ao login</Text>
            </TouchableOpacity>
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

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
        textAlign: 'center',
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
        fontSize: 16,
        textAlign: 'center',
    },
});
