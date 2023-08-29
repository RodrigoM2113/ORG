import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from "hex-to-rgba"


const Equipo = (props) => {

    const {ColorPrimario, ColorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj = {
        backgroundColor: hexToRgba (ColorPrimario, 0.5)
    }
    
    const estiloTitulo = { borderColor: ColorPrimario}

    return <>
    { 
        colaboradores.length > 0 &&
        <section className="Equipo" style={obj}>
            <input
                className="input__color"
                type="color"
                value={ColorPrimario}
                onChange={(evento) =>{
                    actualizarColor(evento.target.value, id)
                }}
            
            />
            <h3 style={estiloTitulo} >{titulo}</h3>
            <div className="Colaboradores">
                {
                    colaboradores.map ((colaborador, index)=> <Colaborador 
                        datos={colaborador} 
                        key={index}
                        ColorPrimario = {ColorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }
            </div>
        </section>
    }
</>
}
            

        

export default Equipo