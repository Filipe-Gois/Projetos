import React from "react";
import "./Image.css";

const Image = ({
  imageRender,
  imageText,
  additionalClass = "",
  width = "",
  height = "",
}) => {
  return (
    <figure className="figure">
      <img
        src={imageRender}
        alt={imageText}
        className={`figure__image ${additionalClass}`}
        width={width}
        height={height}
      />
    </figure>
  );
};

export default Image;
