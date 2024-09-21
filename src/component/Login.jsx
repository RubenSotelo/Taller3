import React, { useState } from "react";
import '../assets/css/login.css'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({
    nombre_usuario: "",
    clave: "",
  });

  const guardarElemento = (e) => {
    setUsuario((prevElement) => ({
      ...prevElement, 
      [e.target.name]: e.target.value,
    }));
  };

  const enviarElemetos = (e) => {
    console.log(usuario);
    e.preventDefault()
    navigate("/Dashboart")
  };

  return (
    <div className="frame">
      <div className="login">Login</div>
      <form onSubmit={enviarElemetos}  >
        <div className="campos">
          <input type="text" name="nombre_usuario" value={usuario.nombre_usuario} onChange={guardarElemento} placeholder="usuario"></input>
          <input type="text" name="clave" value={usuario.clave} onChange={guardarElemento} placeholder="clave"></input>
        </div>
        <button className="log" type="submit">Cargar</button>
        <div className="forgot">
          <a href="#">Olvidaste tu clave?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;