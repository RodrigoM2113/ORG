
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohara",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Genesys Rondon",
    puesto: "Desarroladora de software e instructora",
    fav: true
  },
  
  {
    id: uuidv4(),
    equipo: "UX y Diseno",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },

  {
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Inovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez", 
    puesto: "Dev FullStack",
    fav: true
  
  }])

  const [equipos, actualizarEquipos] = useState([
    
      {
        id: uuidv4(),
        titulo:"Programacion",
        ColorPrimario: "#57C287",
        ColorSecundario: "#D9F7E9"  
      },
      {
        id: uuidv4(),
        titulo:"Front End",
        ColorPrimario: "#82CFFA",
        ColorSecundario: "#E8F8FF"  
      },
      {
        id: uuidv4(),
        titulo:"Data Science",
        ColorPrimario: "#A6D157",
        ColorSecundario: "#F0F8E2"  
      },
      {
        id: uuidv4(),
        titulo:"Devops",
        ColorPrimario: "#E06B69",
        ColorSecundario: "#FDE7E8"  
      },
      {
        id: uuidv4(),
        titulo:"UX y Diseno",
        ColorPrimario: "#DB6EBF",
        ColorSecundario: "#FAE9F5"  
      },
      {
        id: uuidv4(),
        titulo:"Movil",
        ColorPrimario: "#FFBA05",
        ColorSecundario: "#FFF5D9"  
      },
      {
        id: uuidv4(),
        titulo:"Inovacion y Gestion",
        ColorPrimario: "#FF8A29",
        ColorSecundario: "#FFEEDF"  
      }
    
  ])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario) 
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    console.log("EliminarColaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }


  const actualizarColor =(color, id) => {
    console.log("actualizarColor",color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.ColorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  } 

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{ ...nuevoEquipo, id: uuidv4}])
    
    
  }

  const like = (id) => {
    console.log("like" , id)
    const colaboradoresActualizados = colaboradores.map ((colaborador)=> {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  
  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo )}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map ((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like= {like}
          />
        )
      }

      <Footer />
      
    </div>
  
  );
}

export default App;
