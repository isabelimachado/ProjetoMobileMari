import { createContext, useContext, useEffect, useState } from "react";
import { db, auth } from '../Controller';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";

const CarrinhoContext = createContext();

export function ProviderCart({ children }) {
    const [carrinho, setCarrinho] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [carregandoCarrinho, setCarregandoCarrinho] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUsuario(user);
            setCarregandoCarrinho(true);
            if (user) {
                try {
                    const docRef = doc(db, 'carrinhos', user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const dados = docSnap.data();
                        setCarrinho(Array.isArray(dados.produtos) ? dados.produtos : [])
                    }
                    else {
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

            setCarregandoCarrinho(false);
        })
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        async function salvarCarrinhoNoFirebase(lista) {
            if (!usuario || carregandoCarrinho) {
                return;
            }
            try{
                const docRef = doc(db, 'carrinhos', usuario.uid)
                await setDoc(docRef, {produtos:lista})
            }
            catch (error){
                console.log('erro ao salvar no firebase',error);
            }
        }
        salvarCarrinhoNoFirebase(carrinho)
    }, [carrinho, usuario,carregandoCarrinho]);


    function adicionarProduto(produto) {
            setCarrinho((anterior) => Array.isArray(anterior)? [...anterior,produto]:[produto])
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProduto }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}
