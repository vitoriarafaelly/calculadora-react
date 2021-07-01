import React from "react";
import './App.css';
import Calculadora from "./components/Calculadora";



export default class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Calculadora/>
      </div>
    );
  }
  }