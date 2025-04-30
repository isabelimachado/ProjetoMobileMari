import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import AntDesign from '@expo/vector-icons/AntDesign';

function Login() {
    return (
        <View style={styles.animais}>
        <Text>Login</Text>
        </View>
    );
}
//precisa do navigation como propriedade
export default function login({navigation}) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.texto1}><b>Tela de login PetShop</b></Text>
            
            <View>
                <Text style={styles.texto2}>EMAIL</Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                />
            </View>

            <View>
                <Text style={styles.texto2}>SENHA</Text>
                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    secureTextEntry={true}

                />
            </View>

            <View style={styles.botao}>
                <TouchableOpacity onPress={() => navigation.navigate('hometabs')} color="#ff69c4" >
                <Text>logar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.botao}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} color="#ff69c4" >
                <Text>Cadastre-se</Text>
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

    titulo: {
        fontSize: 30,
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