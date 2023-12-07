import React from "react";
import "./Article.css";
import { Button } from "../FormComponents/FormComponents";

const Article = ({ imageRender, alt, title, price, additionalClass }) => {
  return (
    <article className={`article ${additionalClass}`}>
      <div className="article-img">
        <img src={imageRender} alt={alt} />
      </div>
      <div className="article-content">
        <p>{title}</p>
        <p>{price}</p>
        <p>Praesent tincidunt sed tullus ut rutrum sed vitae justo.</p>

        <Button
          additionalClass="button-component--buy"
          textButton={"Buy Tickets"}
        />
      </div>
    </article>
  );
};

export default Article;
