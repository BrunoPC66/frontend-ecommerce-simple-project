import React from "react";


export function Filter({
    listaProdutos,
    setPrecoMin,
    setPrecoMax,
    setFiltraNome,
    ordem,
    setOrdem
}) {

    const onChangeValorMin = (e) => {
        setPrecoMin(e.target.value)
    }

    const onChangeValorMax = (e) => {
        setPrecoMax(e.target.value || Infinity)
    }

    const onChangeNome = (e) => {
        setFiltraNome(e.target.value)
    }

    const selecionaOrdem = (e) => {
        setOrdem(e.target.value)
    }

    listaProdutos.sort((a, b) => {
        if (ordem.value === "crescente") {
            return a.valor - b.valor
        } else if (ordem.value === "decrescente") {
            return b.valor - a.valor
        } else {
            return listaProdutos
        }
    })

    return (
        <div>
            <label>
                Valor Min: <input type="number" name="valorMin" placeholder="Valor Min" onChange={(e) => onChangeValorMin(e)} />
                Valor Max: <input type="number" name="valorMax" placeholder="Valor Max" onChange={(e) => onChangeValorMax(e)} />
                Nome: <input type="text" name="nome" placeholder="Nome" onChange={(e) => onChangeNome(e)} />
            </label>
            <select onChange={selecionaOrdem}>
                <option value="">Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
        </div>
    )
}