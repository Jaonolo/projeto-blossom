import React from "react"
import "../components/layout.css"
import PadrãoTemplate from '../templates/padrão/padrão.template'
import LandingContainer from "../container/landing/landing.container"
import PainelContainer from "../container/painel/painel.container"

const IndexPage = () => (
  <PadrãoTemplate>
    <LandingContainer></LandingContainer>
    <PainelContainer></PainelContainer>
    <LandingContainer></LandingContainer>
  </PadrãoTemplate>
)

export default IndexPage