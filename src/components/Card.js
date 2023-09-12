import '../css/Card.css';
import React from 'react';
import { Card,Col } from 'antd';
import { Link } from 'react-router-dom'; 
const { Meta } = Card;

function CardApp({ produto }) {

  const { id, title, price, category, image } = produto;

  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
    <Link to={`/productdetail/${id}` } className="card-link">
    <Card
      hoverable
      style={{
        width: '100%',
        height: '100%',
        marginBottom: '16px',
      }}
      
      cover={<img
        alt={title} 
        src= {image} 
        className='card-img-top'
        style={{
          width: '100%', 
          height: '300px', 
          objectFit: 'scale-down',
        }}
        />}
    >
    <Meta title={title} description={category} />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        <p className="card-text-price" >Preço: ${price}</p>
    </div>
    
  </Card>
  </Link>
  </Col>
    );
}

export default CardApp;