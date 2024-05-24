import React, {useState} from "react";
import Cropper from "react-easy-crop";
import './main.css'


function HerramientaDeRecorte() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleZoomChange = (e) => {
    setZoom(parseFloat(e.target.value));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB, puedes ajustar este valor según tus necesidades
    const maxAspectRatio = 4 / 3; // Ratio máximo permitido

    // Crear un objeto Image para obtener el ratio de aspecto de la imagen
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      // Validar el ratio de aspecto
      if (aspectRatio > maxAspectRatio) {
        alert("La imagen es demasiado ancha. Por favor, elija una imagen con un ratio de aspecto 1:1.");
        return;
      }

      // Cargar la imagen si el ratio es válido
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
    img.src = URL.createObjectURL(file);

    // Validar el tamaño del archivo
    if (file.size > maxSizeInBytes) {
      alert("La imagen es demasiado grande. Por favor, elija una imagen más pequeña.");
      return;
    }
  };

  const onDownload = () => {
    if (!croppedAreaPixels) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const imageObj = new Image();
    imageObj.src = image;
    imageObj.onload = () => {
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      ctx.drawImage(
        imageObj,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
      const dataUrl = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.download = "crop.jpg";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };


  return (
    <div>
      <h1>Herramienta de recorte</h1>
      <div className="App">
      <div className="crop-container">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={handleZoomChange}
          className="zoom-range"
        />
        <input
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={onDownload}>Descargar</button>
      </div>
    </div>

    </div>
  );
}
export { HerramientaDeRecorte };
