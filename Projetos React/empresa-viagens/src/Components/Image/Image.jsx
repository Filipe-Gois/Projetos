import React from "react";
import "./Image.css";

const Image = ({
  imageRender,
  imageText,
  additionalClass = "",
  width = "",
  height = "",
  figcaption = ""
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
      <figcaption className="image-description">{figcaption}</figcaption>
    </figure>
  );
};

export default Image;
