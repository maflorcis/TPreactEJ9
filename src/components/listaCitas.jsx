import React from 'react';
import Cita from './cita';

const ListaCistas = ({citas, eliminarCita})=>{

    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas': 'Administra las citas aquí';
    return (
       <div className="card mt-2 py-5">
           <div className="card-body">
               <h2 className="card-tittle text-center">{mensaje}</h2>
               <div className="lista-citas">
                   {citas.map(cita=>(
                        <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}/>
                   ))}
               </div>
           </div>
       </div>
    )
};

export default ListaCistas;