import React, { useState } from "react";
import "./ProductSlideshow.scss";
import Card from "../Card/Card";

const ProductSlideshow = () => {
  const [popularProducts, setPopularProducts] = useState({
    productImage: "https://picsum.photos/200",
  });

  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <h1 className="text-center py-5">Most Popular Products</h1>
        <div
          className="carousel js-flickity"
          data-flickity-options='{ "wrapAround": true, "autoPlay": false, "freeScroll": true }'
        >
          <div className="carousel-cell">
            <Card />
          </div>
          <div className="carousel-cell">
            <Card />
          </div>
          <div className="carousel-cell">
            <Card />
          </div>
          <div className="carousel-cell">
            <Card />
          </div>

          <div className="carousel-cell">
            <Card />
          </div>

          <div className="carousel-cell">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlideshow;
