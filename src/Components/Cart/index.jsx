import React from "react";
import { Card } from "../Card/Card";
import { CartStyle } from "./CartStyle";


export function Cart({ listaCarrinho, setListaCarrinho, setItem }) {

  const removerDoCarrinho = (produto) => {
    const noCarrinho = listaCarrinho.find((item) => item.id === produto.id)
    if (noCarrinho.quantidade > 1) {
      const removerProduto = listaCarrinho.map((item) => {
        if (item.id === produto.id) {
          return { ...noCarrinho, quantidade: noCarrinho.quantidade - 1 }
        } else {
          return item
        }
      })
      setListaCarrinho(removerProduto)
    }
    else {
      const removeProduto = listaCarrinho.filter((item) => {
        return item.id !== produto.id
      })
      setListaCarrinho(removeProduto)
    }
    setItem()
  };

  let total = 0

  listaCarrinho.map((item) => {
    return total += item.valor * item.quantidade
  })


  console.log(listaCarrinho);

  const renderizarCarrinho = listaCarrinho.map((produto) => {
    return (
      <Card key={produto.id}>
        <img src={produto.img} alt={produto.nome} />
        <h3>{produto.nome}</h3>
        <p>{produto.valor}</p>
        <p>Quantidade: {produto.quantidade}</p>
        <button onClick={() => removerDoCarrinho(produto)}>Remover</button>
      </Card>
    )
  })

  return (
    <div className="cart">
      <CartStyle>
        {renderizarCarrinho}
      </CartStyle>
      <p>Total: R${total.toFixed(2)}</p>
    </div>
  )
}