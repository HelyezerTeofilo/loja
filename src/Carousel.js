import React from 'react';
import { Carousel } from 'react-bootstrap';

function MyCarousel({ produtos }) {
  return (
    <Carousel>
      {produtos.map((produto) => (
        <Carousel.Item key={produto.id}>
          <img
            className="d-block w-100"
            src={produto.image}
            alt={produto.title}
          />
          <Carousel.Caption>
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
