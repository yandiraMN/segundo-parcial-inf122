import React from "react";
import '../style/Contadorpendiente.css'
function Contadorpendiente({ Nuevameta}){

    return(
        <div className="contadorcompletadas">
            <h3>Pendientes:  {Nuevameta} </h3>
        </div>
    )
}
export default Contadorpendiente;