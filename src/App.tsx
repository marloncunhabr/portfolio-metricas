import { useState } from "react"
import { ThemeProvider } from "styled-components"

import Sobre from "./containers/About"
import Projetos from "./containers/List"
import Sidebar from "./containers/Sidebar"
import EstiloGlobal, { Container } from "./styles"
import temaLight from "./Themes/light"
import temaDark from "./Themes/dark"

function App() {
  const [estaUsandoTemaDark, SetEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    SetEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
