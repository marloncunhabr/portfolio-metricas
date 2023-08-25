import Sobre from "./containers/About"
import Projetos from "./containers/List"
import Sidebar from "./containers/Sidebar"
import EstiloGlobal, { Container } from "./styles"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
