import React, {Component} from "react"
import CabeçalhoContainer from "../../container/cabeçalho/cabeçalho.container"
import RodapéContainer from "../../container/rodapé/rodapé.container"

export default class PadrãoTemplate extends Component{
    render(){
        return(
        <div>
            <CabeçalhoContainer></CabeçalhoContainer>
            <div style={{height: "fit-content"}}>{this.props.children}</div>
            <RodapéContainer></RodapéContainer>
        </div>
        )
    }
}