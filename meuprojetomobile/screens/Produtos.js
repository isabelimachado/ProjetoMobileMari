import { useState , useEffect} from "react";
import { View, Text, StyleSheet,FlatList,Image} from "react-native-web";
import Card from '../components/Card'
import { db } from "../Controller";
import { collection,  doc,  getDocs } from "firebase/firestore";
export default function Produtos(){
    const [produto,setproduto] = useState([]);

    useEffect(() => {
        async function carrregarProduto() {
        try {
            const querySnapshot = await getDocs(collection (db,'produtos'));
            const lista = [];
            querySnapshot.forEach((doc)=>{
                lista.push({id:doc.id, ...doc.data()});
            });
            setproduto(lista);
        } catch (error) {
            console.log("erro ao buscar produto:", error);
        }
    }
    carrregarProduto();
    }, []);
    
    return(
        <View style={styles.container}>
            <br></br>
            <Text style={styles.title}><b>PRODUTOS</b></Text><br></br>

            <FlatList showsVerticalScrollIndicator={false}
                data = {produto}
                renderItem={({item}) => (
                <View>
                    {/* <Image style={{height:300,width:300,borderRadius:10}} source={{uri: item.img}}></Image>
                    <Text style={styles.texto}>{item.nome}</Text>
                    <Text style={styles.texto}>R$ {item.valor}</Text> */}
                    <Card
                        nome={item.nome}
                        valor={item.valor}
                        img={item.imagem}
                    />
                </View>
                )}
                keyExtractor={item => item.id}
            />

            {/* {produto.map((item) => (
                <Text style={styles.text}>
                {item.nome} - R$ {item.valor}
                </Text> /*array com map
            ))} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffcbdb',
        justifyContent: "center",
        textAlign: 'center',
        alignItems: 'center'

    },

    title:{
        fontFamily: 'Arial Narrow',
        fontSize:30,
        color: "black",
        textAlign: 'center'
    },

    // card:{
    //     padding:10,
    //     margin:10,
    //     backgroundColor:"#ef6f82",
    //     borderRadius: 8,
    //     alignItems: "center",
    //     shadowColor: '#000',
    //     shadowOpacity: 0.2,
    //     shadowRadius: 50,
    // },

    // texto:{
    //     fontFamily: 'Arial Narrow',
    //     fontSize:30,
    //     color: "black",
    //     textAlign: 'center'
    // },


})
