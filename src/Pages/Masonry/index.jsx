import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Generar alturas aleatorias para las cajas
const generateRandomHeight = () => Math.floor(Math.random() * (450 - 100 + 1)) + 100;

const boxes = Array.from({ length: 8 }, () => ({
  height: generateRandomHeight(),
  color: `#${Math.floor(Math.random()*16777215).toString(16)}`
}));

const Masonrys = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {boxes.map((box, i) => (
          <div
            key={i}
            style={{
              height: `${box.height}px`,
              backgroundColor: box.color,
              width: "100%",
              display: "block",
            }}
          ></div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export { Masonrys };
