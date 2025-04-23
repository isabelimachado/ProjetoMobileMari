import { View, Text, StyleSheet,Image} from "react-native";

export default function card({nome,valor,img}){
    return(
        <View style={styles.card}>
            <Image style={{height:200,width:200,borderRadius:10}} source={{uri:img}}></Image>
            <View>
                <Text style={styles.texto}>{nome}</Text>
                <Text style={styles.texto}>R$ {valor}</Text></View>
            </View>
    )
}

const styles = StyleSheet.create({
    
    card:{
        padding:10,
        margin:10,
        backgroundColor:"#ef6f82",
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 50,
        flexDirection: "row",
        flex:1


    },

    texto:{
        fontFamily: 'Arial Narrow',
        fontSize:30,
        color: "black",
        flex:1
        
    },


})
