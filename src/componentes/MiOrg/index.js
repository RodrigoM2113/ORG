import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    //const [mostrar, actualizarMostrar]= useState(true)
   // const manejarClick = () =>{
    console.log(props)
   //     console.log('Mostrar / Ocultar elemento',!mostrar)
     //   actualizarMostrar(!mostrar)
    //}
    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick = {props.cambiarMostrar}></img>

    </section>
}

export default MiOrg