import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
function Login() {
    return (
        <View style={styles.animais}>
            <text>Login</text>
            <TextInput style={styles.input} placeholder='none'></TextInput>
            <TextInput style={styles.input} placeholder='none'></TextInput>

        </View>
    );
}

export default function login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Tela de login PetShop</Text>
            <Text style={styles.texto1}></Text>
            <Text style={styles.texto2}>NOME</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder=''
                />
            </View>
            <View style={styles.seila}>
            
                <Text style={styles.texto2}>SENHA</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                />

                <View style={styles.botao}>
                <Button 
                title='logar' 
                color="#000000"
                onPress={() => navigation.navigate('Home')}
                />
                </View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcbdb',
    },


    texto1: {
        fontFamily: 'Cursive',
        textAlign: 'center',
        fontSize: 30,
        top: 90,
    },

    botao: {
        borderRadius: 30,
        width:150,
        left:130,
    },

    texto2: {
        fontFamily: 'Cursive',
        textAlign: 'center',
        fontSize: 30,
        right: 130,
        top: 300,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        fontSize: 30,
        marginTop: 300,
    },

    seila: {
        bottom: 300
    },


});
