import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Card({ nome, valor, img,comprar }) {
    return (
        <View style={styles.card}>
            <Image style={styles.imagem} source={{ uri: img }} />
            <View style={styles.textContainer}>
                <Text style={styles.texto}>{nome}</Text>
                <Text style={styles.texto}>R$ {valor}</Text>
                <Button title="Comprar" onPress={comprar} color={"black"}/> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",//texto e imagem lado a lado
        padding: 20,
        margin: 10,
        backgroundColor: "#ef6f82",
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignItems: "center",
    },
    imagem: {
        height: 150,
        width: 150,
        borderRadius: 10,
        marginRight: 20,
    },
    textContainer: {
        flexDirection: 'column', //deixa os textos na vertical
        maxWidth: '60%',  
    },
    texto: {
        fontFamily: 'Arial Narrowtrttg',
        fontSize: 25,
        color: "black",
        flexShrink: 1, //diminui o texto se precisar
        marginBottom: 5, 
    },
});
