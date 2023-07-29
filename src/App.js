import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Ads } from "./Components/Ads/ads"
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  
  const setItem = () => {
    localStorage.setItem("produto", JSON.stringify(listaCarrinho))
  };
  
  const getItem = () => {
    setListaCarrinho(JSON.parse(localStorage.getItem("produto")))
  };

  
  const [pagina, setPagina] = useState(1)
  const [listaCarrinho, setListaCarrinho] = useState(JSON.parse(localStorage.getItem("produto")))
  const [precoMin, setPrecoMin] = useState(0)
  const [precoMax, setPrecoMax] = useState(Infinity)
  const [filtraNome, setFiltraNome] = useState("")
  const [ordem, setOrdem] = useState("")
  
  const addAoCarrinho = (produto) => {
    const noCarrinho = listaCarrinho.find((item) => item.id === produto.id)
    if (noCarrinho === undefined) {
      setListaCarrinho([...listaCarrinho, { ...produto, quantidade: 1 }])
    } else {
      const aumentaQtd = listaCarrinho.map((item) => {
        if (item.id === produto.id) {
          return { ...noCarrinho, quantidade: noCarrinho.quantidade + 1 }
        } else {
          return item
        }
      })
      setListaCarrinho(aumentaQtd)
    }
    setItem()
  };

  useEffect(() => {
    return listaCarrinho
  }, []);
  
  localStorage.setItem("produto", JSON.stringify(listaCarrinho))

  const mudaPagina = (pagina) => {
    setPagina(pagina)
  };

  return (
    <div>
      <GlobalStyles />
      <Header mudaPagina={mudaPagina} />
      <Navbar
        mudaPagina={mudaPagina}
        getItem={getItem}
      />
      <Home
        pagina={pagina}
        addAoCarrinho={addAoCarrinho}
        listaCarrinho={listaCarrinho}
        setListaCarrinho={setListaCarrinho}
        setItem={setItem}
        precoMin={precoMin}
        setPrecoMin={setPrecoMin}
        precoMax={precoMax}
        setPrecoMax={setPrecoMax}
        filtraNome={filtraNome}
        setFiltraNome={setFiltraNome}
        ordem={ordem}
        setOrdem={setOrdem}
      />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
