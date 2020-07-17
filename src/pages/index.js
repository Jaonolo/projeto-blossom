import React from "react"
import "../components/layout.css"
import PadrãoTemplate from '../templates/padrão/padrão.template'
import LandingContainer from "../container/landing/landing.container"
import Landing2Container from "../container/landing/landing2.container"
import PainelContainer from "../container/painel/painel.container"

const IndexPage = () => (
  <PadrãoTemplate>
    <LandingContainer></LandingContainer>
    <PainelContainer></PainelContainer>
    <Landing2Container></Landing2Container>
  </PadrãoTemplate>
)

export default IndexPage