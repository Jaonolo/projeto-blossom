import React, {Component} from "react"
import "./landing.container.style.scss"

export default class LandingContainer extends Component{
    render(){
        return(
            <div className="landing">
                <div className="landing_conteúdo">
                    <h1 className="landing_título">Ensino de programação, <span className="landing_título_destaque">reinventado.</span></h1>
                    <a href="/sobre">
                        <div className="landing_botão">
                            <h1 className="landing_botão_título">Saiba mais!</h1>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}