import React from "react";

function RenderAvatar({ imageItemState, zIndex, className }) {
  return (
    this.props.user && (
      <img
        src={imageItemState.img}
        alt=""
        id={imageItemState.id}
        style={{ zIndex: `${zIndex}` }}
        className={className}
      />
    )
  );
}

export default RenderAvatar;
