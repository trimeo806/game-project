import React from "react";

function RenderAvatar({ imageItemState, zIndex, className }) {
  return (
    <img
      src={imageItemState.img}
      data-img={imageItemState.img}
      alt=""
      id={imageItemState.id}
      style={{ zIndex: `${zIndex}` }}
      className={className}
    />
  );
}

export default RenderAvatar;
