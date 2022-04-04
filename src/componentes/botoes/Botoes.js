import React from "react";
import "./botoes.css";

export default function Botoes(props) {
  return (
    <div className="botoes">
      <button className="c" onClick={()=>{props.apagar()}}>C</button>
      <button
        className="div"
        onClick={() => {
          props.handleNumero("/");
        }}
      >
        /
      </button>
      <button
        className="mult"
        onClick={() => {
          props.handleNumero("*");
        }}
      >
        *
      </button>
      <button
        className="sub"
        onClick={() => {
          props.handleNumero("-");
        }}
      >
        -
      </button>
      <button
        className="sete"
        onClick={() => {
          props.handleNumero("7");
        }}
      >
        7
      </button>
      <button
        className="oito"
        onClick={() => {
          props.handleNumero("8");
        }}
      >
        8
      </button>
      <button
        className="nove"
        onClick={() => {
          props.handleNumero("9");
        }}
      >
        9
      </button>
      <button
        className="ad"
        onClick={() => {
          props.handleNumero("+");
        }}
      >
        +
      </button>
      <button
        className="quatro"
        onClick={() => {
          props.handleNumero("4");
        }}
      >
        4
      </button>
      <button
        className="cinco"
        onClick={() => {
          props.handleNumero("5");
        }}
      >
        5
      </button>
      <button
        className="seis"
        onClick={() => {
          props.handleNumero("6");
        }}
      >
        6
      </button>
      <button
        className="ponto"
        onClick={() => {
          props.handleNumero(".");
        }}
      >
        .
      </button>
      <button
        className="um"
        onClick={() => {
          props.handleNumero("1");
        }}
      >
        1
      </button>
      <button
        className="dois"
        onClick={() => {
          props.handleNumero("2");
        }}
      >
        2
      </button>
      <button
        className="tres"
        onClick={() => {
          props.handleNumero("3");
        }}
      >
        3
      </button>
      <button
        className="igual"
        onClick={() => {
          props.result();
        }}
      >
        =
      </button>
      <button
        className="zero"
        onClick={() => {
          props.handleNumero("0");
        }}
      >
        0
      </button>
    </div>
  );
}
