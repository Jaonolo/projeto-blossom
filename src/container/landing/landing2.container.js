import React, {Component} from "react"
import "./landing2.container.style.scss"

export default class LandingContainer extends Component{
    render(){
        return(
            <div className="landing2">
                <div className="landing2_conteúdo">
                    <h1 className="landing2_título">Gostou do projeto?</h1>
                    <a href="https://github.com/Jaonolo/Projeto-Blossom/">
                        <div className="landing2_botão">
                            <h1 className="landing2_botão_título">Junte-se a nós!</h1>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}