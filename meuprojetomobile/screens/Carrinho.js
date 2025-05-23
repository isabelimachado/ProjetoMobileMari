import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useCarrinho } from "../components/ProviderCart";

export default function Carrinho() {
    const { carrinho } = useCarrinho();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TELA CARRINHO</Text>

            {carrinho.length === 0 ? ( //se o carrinho estiver vazio(0)... o texto -> ? - true
                <Text style={styles.vazio}>Seu carrinho está vazio </Text>
            ) : ( //o : faz o que acontece quando a condição não é satisfeita, seria nosso false
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
            )}
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

    vazio: {
        fontSize: 24,
        fontFamily: 'Arial Narrow',
        textAlign: 'center',
        marginTop: 20,
        color: '#555',
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
