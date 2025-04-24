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
        padding: 10,
        margin: 10,
        backgroundColor: "#ef6f82",
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignItems: "center",
    },
    imagem: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 10,
    },

    texto: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: "black",
        flexWrap: 'wrap',
    },
});
