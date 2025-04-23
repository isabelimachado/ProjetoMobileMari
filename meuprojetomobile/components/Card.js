import { View, Text, StyleSheet,FlatList,Image} from "react-native-web";

export default function card({nome,valor,img}){
    return(
        <View style={styles.card}>
            <Image style={{height:300,width:300,borderRadius:10}} source={{uri:img}}></Image>
            <Text style={styles.texto}>{nome}</Text>
            <Text style={styles.texto}>R$ {valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    card:{
        padding:10,
        margin:10,
        backgroundColor:"#ef6f82",
        borderRadius: 8,
        alignItems: "center",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 50,
    },

    texto:{
        fontFamily: 'Arial Narrow',
        fontSize:30,
        color: "black",
        textAlign: 'center'
    },


})
