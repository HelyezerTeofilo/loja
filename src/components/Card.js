import React from 'react';
import '../css/Card.css';

function Card({ produto }) {

  const { title, price, category, image } = produto;

  return (
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Categoria: {category}</p>
          <p className="card-text-price">Preço: ${price}</p>
        </div>
      </div>
    );
}

export default Card;
