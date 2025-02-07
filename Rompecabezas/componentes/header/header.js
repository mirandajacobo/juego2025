
import React from "react";
import "./Header.css";
import  "./data.js";



const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎮</div>
      <h1 className="game-title">Nombre del Juego</h1>
      <div className="buttons">
        <button>Inicio</button>
        <button>Opciones</button>
        <button>Salir</button>
      </div>
    </header>
  );
};

export default Header;