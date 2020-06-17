import React, { Component } from "react";

class Contacto extends Component {
  render() {
    return (
      <div className="caja">        
        <h1><i className="fas fa-user-circle"></i>{this.props.nombre}</h1>
        <>        
          <p>Teléfono: {this.props.telef}</p>
          <p>Dirección: {this.props.direc}</p>
        </>
        <hr></hr>
      </div>
    );
  }
}

export default Contacto;
