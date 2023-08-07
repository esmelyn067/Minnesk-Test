import React from 'react';
import '../styles.css'; 

const ProductCarousel = ({ products }) => {
  return (
    <div>
      <h2>Product Carousel</h2>
      <div className="carousel">
        {products.map((product, index) => (
          <div key={index} className="carousel-item">
            <img src={product.productImage} alt={product.productName} />
            <p>{product.productName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
