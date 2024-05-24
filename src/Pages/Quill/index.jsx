import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Quill.css"; // Asegúrate de crear este archivo CSS para los estilos adicionales

function Quill() {
  const [valor, setValor] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const Herramientas = {
    toolbar: toolbarOptions,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h1>Quill</h1>
      <button
        className="toggle-toolbar-btn"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        &#x22EE; {/* Esto representa los tres puntos verticales */}
      </button>
      <div
        ref={dropdownRef}
        className={`dropdown-toolbar ${isDropdownOpen ? "show" : ""}`}
      >
        <ReactQuill
          modules={Herramientas}
          theme="snow"
          value={valor}
          onChange={setValor}
        />
      </div>
      <br />
      <button
        className="border-collapse bg-black text-white"
        onClick={() => console.log(valor)}
      >
        Enviar
      </button>
    </div>
  );
}

export { Quill };
