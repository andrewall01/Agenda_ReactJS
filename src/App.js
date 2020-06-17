import React, { Component } from "react";
import Contacto from "./components/contacto";
import Video from "./components/video";
import "./App.css";

class App extends Component {
  ruta ="http://localhost:3600";
  constructor(){
    super();
    this.state ={
      titulo: "Lista de Contactos",
      lista :[],
      videos:[]
    };
  }

  componentWillMount(){
    fetch(this.ruta+"/contactos")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      this.setState({
        lista:data
      });
    });

    fetch(this.ruta+"/videos")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      this.setState({
        videos:data
      });
    });
  }


  render() {
    return (

      <div className="container">
        <h2>{this.state.titulo}</h2>
        <div className="content">
        {this.state.lista.map(item=>{
          return(<div key={item.id}><Contacto
            nombre={item.nombre}
            telef={item.telefono}
            direc={item.direccion}
          />
          </div>);
        })} </div>   

        {this.state.videos.map(item=>{
          return(<div key={item.id}><Video
            nombre={item.nombre}
            codigo={item.codigo}
          />
          </div>);
        })}   
      </div>
    );
  }
}

export default App;
