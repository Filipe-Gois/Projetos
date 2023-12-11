import React from "react";
import "./Figure.css"

const Figure = ({
  imageRender,
  altText = "",
  figCaption,
  additionalClass = "",
}) => {
  return (
    <figure className="figure">

      <img 
      src={imageRender} 
      alt={altText} 
      className={`image ${additionalClass}`} 
      
      />

      <figcaption className="image-description">{figCaption}</figcaption>
    </figure>
  );
};

export default Figure;