import "./colaborador.css"
import {AiTwotoneDelete, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {ColorPrimario, eliminarColaborador, like} = props
    
    return <div className="colaborador">
        <AiTwotoneDelete className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style = {{backgroundColor:ColorPrimario }}>
            <img src={foto} alt={nombre}/> 
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/> }
            
            
        </div>
    </div>
}

export default Colaborador