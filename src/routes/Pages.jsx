import React  from "react";

//Impotacion de las vistas
export const Login = React.lazy(() => import("../component/Login"))
export const Registro = React.lazy(() => import("../component/Registro"))
export const Dashboart = React.lazy(() => import("../component/Dashboart"))
export const ListaEstudiantes = React.lazy(() => import("../component/ListaEstudiantes"))