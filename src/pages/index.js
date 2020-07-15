import React from "react"
import "../components/layout.css"
import PadrãoTemplate from '../templates/padrão/padrão.template'
import LandingContainer from "../container/landing/landing.container"

const IndexPage = () => (
  <PadrãoTemplate>
    <LandingContainer></LandingContainer>
  </PadrãoTemplate>
)

export default IndexPage