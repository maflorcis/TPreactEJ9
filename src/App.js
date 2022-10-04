import './style.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import NuevaCita from './components/nuevaCita';
import ListaCitas from './components/listaCitas';

class App extends Component {
  state ={
    citas: []    

  }

  //Proceso para carga de app
    componentDidMount(){
      const citasLS = localStorage.getItem('citas');
      if(citasLS){
          this.setState({
            citas : JSON.parse(citasLS)
          })
      }
    }

  // Se crea un turno

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datos => {
    //State Actual
    const citas = [...this.state.citas, datos]

    // Se renderiza el state

    this.setState({
      citas: citas
    })
  }

    //Elimino turnos
      eliminarCita = id =>{
        //Copio el state
          const citasActuales = [...this.state.citas]

        //Ajustamos el arreglo
        const citas = citasActuales.filter(cita => cita.id !== id);

        //Nuevo state
        this.setState({
          citas
        })

      }

  render(){
    return (
      <div className="container">
        <Header
        titulo='Administrador Pacientes Veterinaria Florencia'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
            crearNuevaCita ={this.crearNuevaCita}
            />
          </div>

            <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
              />
            </div>
        </div>
      </div>   
    );
  }
}

export default App;