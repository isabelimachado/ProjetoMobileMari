import { View, Text, StyleSheet, Image } from "react-native";

export default function Card({ nome, valor, img }) {
    return (
        <View style={styles.card}>
            <Image style={styles.imagem} source={{ uri: img }} />
            <View>
                <Text style={styles.texto}>{nome}</Text>
                <Text style={styles.texto}>R$ {valor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
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
        height: 120,
        width: 120,
        borderRadius: 10,
        marginRight: 30,
    },

    texto: {
        fontFamily: 'Arial',
        fontSize: 25,
        color: "black",
        right: 20,
        flexWrap: 'wrap'
    },
});
