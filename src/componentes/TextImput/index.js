import { useState } from "react"
import "./imput.css"
const Imput = (props) => {
    const [valor, actualizarValor] = useState("")
    
    const {type = "text"} = props

    const placeholderModificado = `${props.placeholeder}...`

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required}
        value = {props.valor}
        onChange={manejarCambio}
        type= {type}
        />
    </div>
}

export default Imput