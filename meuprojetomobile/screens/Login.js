import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
// import AntDesign from '@expo/vector-icons/AntDesign';

function Login() {
    return (
        <View style={styles.animais}>
        <Text>Login</Text>
            <TextInput style={styles.input} placeholder='none'></TextInput>
            <TextInput style={styles.input} placeholder='none'></TextInput>
        </View>
    );
}
//precisa do navigation como propriedade
export default function login({navigation}) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.texto1}><b>Tela de login PetShop</b></Text>
            <Text style={styles.texto2}>NOME</Text>
            
            <View>
                <TextInput
                    placeholder=''
                    style={styles.input}
                />
            </View>
                <View style={styles.caixa}>
                <Text style={styles.texto2}>SENHA</Text>
                <TextInput
                    placeholder=''
                    style={styles.input}
                />
                </View>

                <View style={styles.botao}>
                <Button 
                title='logar' 
                color="#ff69b4"
                onPress={() => navigation.navigate('hometabs')} 
                />
                </View>

        </View>
    );
}

//hometabs -> função/componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcbdb',
    },


    texto1: {
        fontFamily: 'Arial Narrow',
        textAlign: 'center',
        fontSize: 30,
        top: 150,
    },

    botao: {
        width:150,
        height:150,
        bottom:90,
        left:130,

    },

    texto2: {
        fontFamily: 'Arial Narrow',
        textAlign: 'center',
        fontSize: 30,
        right: 130,
        top: 300,
    },

    caixa:{
        bottom:300
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:15,
        padding: 10,
        textAlign: 'center',
        fontSize: 30,
        marginTop: 300,
    },

    seila: {
        bottom: 300
    },


});
