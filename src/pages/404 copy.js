import React from "react"
import CabeçalhoContainer from "../container/cabeçalho/cabeçalho.container"
import RodapéContainer from "../container/rodapé/rodapé.container"
import "./404.style.scss"
const triste = require("../images/emoji_triste.svg")

const NotFoundPage = () => (
  <div>
    <CabeçalhoContainer></CabeçalhoContainer>
    <div className="página_404">
      <div className="holder_404">
        <img src={triste} className="sadtimes"></img>
        <div>
          <h1 className="título_404">Erro <span className="título_404_destaque">404</span>, Pagina não encontrada</h1>
          <p className="descrição_404">Mas não fique triste, ainda tem muito mais pra explorar por aqui! :)</p>
        </div>
      </div>
    </div>
    <RodapéContainer></RodapéContainer>
  </div>
)

export default NotFoundPage
