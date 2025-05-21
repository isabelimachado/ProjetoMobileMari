import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function ProviderCart({children}){
    const [carrinho, setCarrinho] = useState([]);

    function adicionarProduto(produto){
        setCarrinho((anterior) => [...anterior, produto])
    }

    return (
        <CarrinhoContext.Provider value={{carrinho, adicionarProduto}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho(){
    return useContext(CarrinhoContext);
}
