import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Card({ nome, valor, img, comprar, remover }) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: img }} />
      <View style={styles.container}>
        <Text style={styles.texto}>{nome}</Text>
        <Text style={styles.texto}>R$ {valor}</Text>
        {comprar && <View style={styles.botao}>
          <Button title="Comprar" onPress={comprar} color="black" />
        </View>}
        {remover && <View style={styles.botao}>
          <Button title="Remover" onPress={remover} color="black" />
        </View>}
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
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignItems: "center",
  },
  imagem: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 20,
  },
  container: {
    flexDirection: "column",
    maxWidth: "60%",
    flex: 1,
  },
  texto: {
    fontFamily: "Arial Narrow",
    fontSize: 25,
    color: "black",
    flexShrink: 1,
    marginBottom: 5,
  },
  botao: {
    width: "100%",
    marginTop: 10,
  },
});
