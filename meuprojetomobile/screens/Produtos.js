import { useState } from "react";
import { View, Text, StyleSheet,FlatList,Image} from "react-native-web";
import Card from '../components/Card'

export default function Produtos(){
    const [produto,setproduto] = useState([
        {id:1, nome: 'Ração de gato filhote', valor: 50.99,img: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-lgcl63vzwxof58'},
        {id:2, nome: 'Arranhador de gato', valor: 130.00,img: 'https://th.bing.com/th/id/OIP.xof0ct10wgjcgZ8-oZJglAHaF3?rs=1&pid=ImgDetMain'},
        {id:3, nome: 'Rémedio de cachorro', valor: 25.00,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQv4sHF85JOrWz2NieYmIzKJDwgLWDDE6fg&s'},
        {id:3, nome: 'Roupa de salsicha', valor: 90.99, img: 'https://fotos.amomeupet.org/uploads/fotos/1640183798_61c337f6689ae_hd.jpeg'}

    ])
    
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
                        img={item.img}
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
