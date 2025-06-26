import { createContext, useContext, useEffect, useState } from "react";
import { db, auth } from '../Controller'; //autenticacao e banco
import { doc, setDoc, getDoc } from 'firebase/firestore'; //conseguir os documentos no banco
import { onAuthStateChanged } from "firebase/auth"; //verifica estado do login do usuario, se esta logado ou não

const CarrinhoContext = createContext(); //criar o contexto do carrinho, para compartilhar o estado dele

export function ProviderCart({ children }) {  //dentro do providercart vai ter um children
    const [carrinho, setCarrinho] = useState([]);//coisas do carrinho
    const [usuario, setUsuario] = useState(null); //estado do usario obrigatorio
    const [carregandoCarrinho, setCarregandoCarrinho] = useState(true);  //flag para indicar se esta carregando,comeca true

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUsuario(user);
            setCarregandoCarrinho(true);
            if (user) { //verifica se o usuario ta logado
                try {
                    const docRef = doc(db, 'carrinhos', user.uid); //pega carrinho do usuario no banco
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) { //se tiver pega e atualiza os dados numa lista e atualiza isso dentro do carrinho
                        const dados = docSnap.data();
                        setCarrinho(Array.isArray(dados.produtos) ? dados.produtos : []) //se nao tiver inicia vazio
                    }
                    else { //se nao,vazio tb
                        setCarrinho([]);
                    }

                }
                catch (error) {
                    console.log("Erro no carrinho", error);
                    setCarrinho([]);
                }
            }
            else {
                setCarrinho([]);
            }

            setCarregandoCarrinho(false); //se nn tive logado e carrinho vazio fica falso
        })
        return () => unsubscribe(); //para cancelar as escutas do firebase de login e td mais qnd for pra outra tela, resumo pra nao dar erro como bug no app ou em algm componente
    }, []);

    useEffect(() => {
        async function salvarCarrinhoNoFirebase(lista) {
            if (!usuario || carregandoCarrinho) {
                return; //se nao tive usuario e tiver carregando carrinho, nao continua funcao
            }
            try{ //senao tenta isso
                const docRef = doc(db, 'carrinhos', usuario.uid)
                await setDoc(docRef, {produtos:lista}) //pega os produtos e adiciona na lista
            }
            catch (error){
                console.log('erro ao salvar no firebase',error);
            }
        }
        salvarCarrinhoNoFirebase(carrinho) //roda a funcao
    }, [carrinho, usuario,carregandoCarrinho]); //vai roda toda vez q uma dessas variaveis muda


    function adicionarProduto(produto) {
            setCarrinho((anterior) => Array.isArray(anterior)? [...anterior,produto]:[produto])
    }

    function removerProduto(index){
        const novaLista = []

        setCarrinho((estadoAnterior) => { //funcao de remover carrinho pelo indice, cria lista e adiciona todos menos os que ja tiverem na posicao index, e atualiza o carrinho
            for(let i = 0; i < estadoAnterior.length; i++){
                if (i !== index) {
                    novaLista.push(estadoAnterior[i])
                }
            }
        return novaLista;
        })
    }

    return ( //vai retornar com children td anterior
        <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto }}>
            {children} 
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext); //esse usecarrinho facilita para achar os dados do carrinho usando o contexto dele e a variavel do contexto do carrinho, se precisa usar esses contextos eh so coloca em outra tela providercart o usecarrinho() -> mais facil
}
