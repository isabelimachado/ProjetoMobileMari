import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { db } from '../Controller';
import { collection, addDoc } from 'firebase/firestore';

export default function Cadastrar() {
    const [nome, setnome] = useState("")
    const [valor, setvalor] = useState("")
    const [imagem, setimagem] = useState("")

    async function cadastrarProduto() {
        try {
            await addDoc(collection(db, "produtos"), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setnome("");
            setvalor("");
            setimagem("");
        } catch (error) {
            console.error("Erro ao cadastrar produto: ", error);
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}><b>CADASTRO PRODUTO</b><br></br></Text>


            <View>
                <Text style={{ fontSize: 20 }}>NOME</Text>
                <TextInput
                    placeholder='Nome'
                    style={styles.input}
                    value={nome}
                    onChangeText={setnome}
                />
            </View>

            <View>
                <Text style={{ fontSize: 20 }}>VALOR</Text>
                <TextInput
                    placeholder='valor'
                    style={styles.input}
                    value={valor}
                    onChangeText={setvalor}
                />
            </View>

            <View>
                <Text style={{ fontSize: 20 }}>IMAGEM</Text>
                <TextInput
                    placeholder='imagem'
                    style={styles.input}
                    value={imagem}
                    onChangeText={setimagem}
                />
            </View>

            <View style={styles.botao}>
                <TouchableOpacity color="#ff69c4" onPress={cadastrarProduto} >
                    <Text style={{fontSize:20, fontFamily: "Arial Narrow", color: "white"}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffcbdb'
    },


    title: {
        fontSize: 40,
        color: "#000",
        fontFamily: 'Arial Narrow',
        textAlign: "center"
    },

    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
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
}) 