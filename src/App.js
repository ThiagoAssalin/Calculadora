import React, { useEffect, useState } from "react";
import "./App.css";
import Botoes from "./componentes/botoes/Botoes";
import Header from "./componentes/header/Header";

function App() {
  const [numero,setNumero] = useState("") 

  function handleNumero(a){
    if(numero === ""){
      setNumero(a)
    }else{
      setNumero(numero + a)
    }
  }

  function result (){
     var resultado = eval(numero)
      setNumero(resultado)
  }

  function apagar (){
    setNumero("")
  }





  

  /*function insert(number) {
    if (a === "") {
      a = number;
      mostrarNumero(a)
    } else {
      a = a + number;
      mostrarNumero(a)
    }
    console.log(a);
  }
  function result() {
    result = eval(a);
    console.log(result);
  }*/

 

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="tela">
            <p>{numero}</p>
        </div>
        <Botoes handleNumero = {handleNumero} result = {result} apagar = {apagar}/>
      </div>
    </div>
  );
}

export default App;
