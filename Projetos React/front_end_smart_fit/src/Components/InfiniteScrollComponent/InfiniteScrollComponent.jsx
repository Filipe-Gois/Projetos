import React, { useEffect, useRef, useState } from "react";
import "./InfiniteScrollComponent.css";
import InfiniteScroll from "react-infinite-scroll-component";
import CardUnidade from "../CardUnidade/CardUnidade";

const InfiniteScrollComponent = ({ fnLoadMore }) => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      //root: passar o elemento pai aqui
      root: document.querySelector(".banner"),
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fnLoadMore();
      }
    }, options);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} />;
};

export default InfiniteScrollComponent;
