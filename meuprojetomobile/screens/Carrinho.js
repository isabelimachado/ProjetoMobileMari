import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useCarrinho } from "../components/ProviderCart";

export default function Carrinho() {
    const { carrinho } = useCarrinho();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TELA CARRINHO</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={carrinho}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image style={styles.imagem} source={{ uri: item.imagem }} />
                        <View style={styles.textos}>
                            <Text style={styles.texto}>{item.nome}</Text>
                            <Text style={styles.valor}>R$ {item.valor}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        backgroundColor: '#ffcbdb',
    },

    title: {
        fontSize: 36,
        color: "#000",
        fontFamily: 'Arial Narrow',
        textAlign: "center",
        marginBottom: 20,
        fontWeight: 'bold',
    },

    imagem: {
        height: 100,
        width: 100,
        borderRadius: 12,
        marginRight: 15,
    },

    texto: {
        fontFamily: 'Arial Narrow',
        fontSize: 30,
        color: "black",
        marginBottom: 5,
        flexWrap: 'wrap',
    },

    valor: {
        fontFamily: 'Arial Narrow',
        fontSize: 30,
        color: "#555",
    },

    card: {
        backgroundColor: "white",
        padding: 15,
        marginVertical: 8,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',

    },

    textos: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
