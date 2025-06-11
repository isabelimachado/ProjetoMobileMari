import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useCarrinho } from "../components/ProviderCart";
import Card from "../components/Card";


export default function Carrinho() {
    const { carrinho, removerProduto } = useCarrinho();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TELA CARRINHO</Text>

            {carrinho.length === 0 ? ( //se o carrinho estiver vazio(0)... o texto -> ? - true
                <Text style={styles.vazio}>Seu carrinho está vazio </Text>
            ) : ( //o : faz o que acontece quando a condição não é satisfeita, seria nosso false
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={carrinho}
                    renderItem={({ item, index}) => (
                    <Card
                        nome={item.nome}
                        valor={item.valor}
                        img={item.imagem}
                        remover={() => removerProduto(index)}
                    />
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

});
