import React, {Component} from 'react';
import uuid from 'react-uuid';


const stateInicial = {
    cita:{
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    },
    error:false
}



class NuevaCita extends Component {
    state={  ...stateInicial    }

    // Inputs 
       handleChange= (e) =>{
           
           //Renderizamos

           this.setState({
               cita: {
                   ...this.state.cita,
                   [e.target.name] : e.target.value
               }
           })

        }

        // Se envía el método
        handleSubmit = e => {
            e.preventDefault();

            //state nuevo
            const {mascota,propietario, fecha, hora, sintomas} = this.state.cita;

            //Alguna validación...

            if (mascota === '' || propietario ==='' || fecha=== '' || hora === '' || sintomas === '' )
            {
                this.setState({
                    error:true
                })
           

            //Se detiene
            return;
        }

        // Los datos se cargan a un objeto

            const nuevaCita = {...this.state.cita};
            nuevaCita.id= uuid();

            //State con objeto
            this.props.crearNuevaCita(nuevaCita) 

            //Reiniciamos el form luego de enviarlo
            this.setState({
                ...stateInicial
            })
        }



    render(){

    // Tomamos el valor del state
    
    const {error}= this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llená el formulario para crear una nueva cita
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> ¡¡Todos los campos son obligatorios!!</div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                    />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe los sintomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                    >
                                </textarea>
                            </div>
                        </div>
                            <input type="submit" className="py-3 mt-2 btn btn-primary btn-block" value="Agregar Nueva Cita"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaCita;