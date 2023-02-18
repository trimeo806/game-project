import React from "react";
// import imageBody from "./character/BodyImage.js";
// import imageEyes from "./character/EyesImage.js";

function RenderImage({ name, imageName, handleImageItemState }) {
  return (
    <div className="list-section">
      <h2>{name}</h2>
      <div className="list">
        {imageName.map((img) => {
          return (
            <div className="clickable item" key={img.id}>
              <img
                src={img.img}
                alt=""
                height="60"
                className="img-center"
                style={{ top: "50%" }}
                id={img.id}
                onClick={handleImageItemState}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RenderImage;
