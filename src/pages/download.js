import React from "react"
import PadrãoTemplate from "../templates/padrão/padrão.template"
import LandingContainer from "../container/landing/landing.container"
import "./404.style.scss"

const DownloadPage = () => (
  <PadrãoTemplate>
    <div className="página_404">
      <LandingContainer></LandingContainer>
    </div>
  </PadrãoTemplate>
)

export default DownloadPage