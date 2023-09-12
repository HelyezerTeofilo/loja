import React from 'react';
import { Carousel } from 'antd';

const CarouselApp = ({ products }) => (
    <Carousel autoplay
        style={{
            backgroundColor: '#FFF',
            marginBottom: '15px',
        }}
    >
    {products.map((product, index) => (
      <div key={index} >
        <h3 style={{textAlign: 'center',marginTop: '10px'}}>{product.title}</h3>
        <img 
            src={product.image} 
            alt={`Product ${index + 1}`} 
            style={{ width: '100%', height: '500px' ,objectFit: 'contain'}} />
      </div>
    ))}
  </Carousel>
);
export default CarouselApp;