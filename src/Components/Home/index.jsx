import React from "react";
import { Cart } from "../Cart";
import { Filter } from "../Filter";
import { Produtos } from "../Produtos";
import { HomeStyle } from "./HomeStyle";
import { ArrayProdutos } from "../../Data/ArrayProdutos";

export function Home({
    pagina,
    addAoCarrinho,
    listaCarrinho,
    setListaCarrinho,
    setItem,
    precoMin,
    setPrecoMin,
    precoMax,
    setPrecoMax,
    filtraNome,
    setFiltraNome,
    ordem,
    setOrdem,
}) {

    const listaProdutos = ArrayProdutos

    return (
        <HomeStyle>
            {pagina === 1 ?
                <>
                    <Filter
                        listaProdutos={listaProdutos}
                        precoMin={precoMin}
                        setPrecoMin={setPrecoMin}
                        precoMax={precoMax}
                        setPrecoMax={setPrecoMax}
                        filtraNome={filtraNome}
                        setFiltraNome={setFiltraNome}
                        ordem={ordem}
                        setOrdem={setOrdem}
                    />
                    <Produtos
                        listaProdutos={listaProdutos}
                        addAoCarrinho={addAoCarrinho}
                        precoMin={precoMin}
                        precoMax={precoMax}
                        filtraNome={filtraNome}
                    />
                </>
                :
                <Cart
                    listaCarrinho={listaCarrinho}
                    setListaCarrinho={setListaCarrinho}
                    setItem={setItem}
                />}
        </HomeStyle>
    )
}