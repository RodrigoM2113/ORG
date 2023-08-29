import { useState } from "react"
import "./Formulario.css"
import Imput from "../TextImput/"
import ListaOpciones from "../listaOpciones"
import Boton from "../Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (evento) =>{
        evento.preventDefault()
        console.log("Manejar el Envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, ColorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Imput 
            titulo="Nombre" 
            placeholder="Ingresa tu nombre" 
            required={true} 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <Imput 
            titulo="Puesto" 
            placeholder="Ingresa tu Puesto"
            required={true}
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />
            <Imput 
            titulo="Foto" 
            placeholder="Ingresa enlace de tu Foto"
            required={true}
            valor={foto}
            actualizarValor= {actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Imput 
            titulo="Titulo" 
            placeholder="Ingresa Titulo" 
            required={true} 
            valor={titulo}
            actualizarValor={actualizarTitulo}
            />
            <Imput 
            titulo="Color " 
            placeholder="Ingresa Color Hexadecimal"
            required={true}
            valor={color}
            actualizarValor={actualizarColor}
            type= "color"
            />
            <Boton>Registrar Equipo</Boton>
            </form>
    </section>
}

export default Formulario