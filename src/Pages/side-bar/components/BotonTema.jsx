import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";
import "../main.css";

function BotonTema( { darkTheme, toggleTheme}) {
  return(
<div className="cambiarTema">
  <Button onClick={toggleTheme}> 
    {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
  </Button>
</div>  
);
}

export { BotonTema };
