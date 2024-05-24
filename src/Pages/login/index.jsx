import React, { useState } from "react";
// import logo from "../../assets/img/abajo.png";
import "../../index.css";
import { FaUserAlt } from "react-icons/fa";
import { GoPasskeyFill } from "react-icons/go";
import { PiLockKeyOpenLight } from "react-icons/pi";

import logo from "../../assets/img/logo.png";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 relative">
          <img
            src="https://pbs.twimg.com/profile_images/1289275176404701185/RAOXbvhz_400x400.jpg"
            alt="logo"
            className="absolute top-0 left-0 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 p-2"
          />
          <h2 className=" gradient-corner "></h2>
          <form
            className="space-y-6 pt-32"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-3 text-gray-700"
              >
                Usuario
              </label>
              <div className="relative flex items-center">
                <FaUserAlt className="mr-2 w-17" />
                <input
                  id="usuario"
                  name="usuario"
                  type="text"
                  autoComplete="usuario"
                  required
                  placeholder="Usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sombra"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-3 text-gray-700"
              >
                Contraseña
              </label>
              <div className="relative flex items-center">
                <GoPasskeyFill className="mr-2 w-17" />
                <input
                  id="contraseña"
                  name="contraseña"
                  type="contraseña"
                  autoComplete="current-password"
                  placeholder="********"
                  required
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sombra"
                />
              </div>
            </div>

            <div className=" flex items-center justify-between">
              <div className="text-sm ">
                <a
                  href="#"
                  className="relative flex items-center font-medium text-blue-600 hover:text-blue-500"
                >
                  <PiLockKeyOpenLight className="mr-2 w-17" />
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="flex-1 mr-2 py-2 px-4 border border-blue-400 rounded-md shadow-sm text-sm font-medium text-black bg-transparent hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                className="flex-1 py-2 px-4 border border-blue-400 rounded-md shadow-sm text-sm font-medium text-black bg-transparent hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Registrarse
              </button>
            </div>
          </form>
          <footer className="w-full py-4 flex justify-center items-center">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="logo"
                className="h-16 w-auto sm:h-20 md:h-24 lg:h-32 xl:h-40 mb-2"
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export { Login };
