import React, { Component } from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faPhone,
  faHome,
} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import "../App.css";

class Contacto extends Component {
  render() {
    return (
      <div className="caja">
        <div className="App">
          <FontAwesomeIcon
            className="perfil"
            icon={faUserCircle}
          ></FontAwesomeIcon>
        </div>
        <h1>{this.props.nombre}</h1>
        <div>
          <p>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            {" "+this.props.telef}
          </p>        
          <p>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            {" "+this.props.direc}</p>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Contacto;
