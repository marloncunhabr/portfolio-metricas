import Paragrafo from "../Paragrafo"
import Titulo from "../Title"

import { Card, LinkBotao } from "./style"

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
