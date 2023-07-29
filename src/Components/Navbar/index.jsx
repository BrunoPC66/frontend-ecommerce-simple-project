import React from "react";
import { NavbarStyle } from "./NavbarStyle";

export function Navbar({ getItem, mudaPagina }) {
    const recuperarCarrinho = () => {
        const historicoCarrinho = getItem()
        console.log('historico', historicoCarrinho)
        mudaPagina(2)
    }

    return (
        <NavbarStyle>
            <button className="inicio" onClick={() => mudaPagina(1)}>Inicio</button>
            <button className="carrinho" onClick={() => recuperarCarrinho()}>Carrinho</button>
        </NavbarStyle>
    )
}