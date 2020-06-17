import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.nombre}</h1>
        <>
          <p>Url: <a href={"https://www.youtube.com/watch?v="+this.props.codigo} target="_blank">Ver Video</a></p>          
        </>
        <hr></hr>
      </div>
    );
  }
}

export default Video;
