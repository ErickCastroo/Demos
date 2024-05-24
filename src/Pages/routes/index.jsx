import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
//importar las paginas
import { App } from "../../Pages/side-bar";
// import { Masonrys } from "../../Pages/Masonry";
import { Login } from "../../Pages/login";
import { Quill } from "../../Pages/Quill";
import {HerramientaDeRecorte} from "../../Pages/HerramientaDeRecortes";
import { Navbar } from "../sideBarPureba2";

//importar los componentes

function Rutas() {
  const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: "/",

        element: <App />,
      },

      // {
      //   path: "/masonry",

      //   element: <Masonrys />,
      // },
      {
        path: "/login",

        element: <Login />,
      },
      {
        path: "/quill",

        element: <Quill />,
      },
      {
        path: "/imagen",

        element: <HerramientaDeRecorte />,
      },
      {
        path: "/navbar",

        element: <Navbar />,
      },
    ]);
    return routes;
  };

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export { Rutas };
