import { Login, Dashboart, Registro, ListaEstudiantes } from "./Pages";

export const ConfigRoutes = [
  { path: "/Login", element: <Login/> },
  { path: "/Registro", element: <Registro/> },
  { path: "/Dashboart", element: <Dashboart/> },
  { path: "/Estudiantes", element: <ListaEstudiantes/> }
];
