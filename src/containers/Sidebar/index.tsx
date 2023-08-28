import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Title"
import Avatar from "../../components/avatar"

import { Descrisao, BotaoTema, SideBarContainer } from "./style"

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={18}>Marlon Cunha</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        marloncunhaof
      </Paragrafo>
      <Descrisao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descrisao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
