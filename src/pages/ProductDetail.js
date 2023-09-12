import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ProductDetail.css'

const ProductDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((resposta) => {
          setProduct(resposta.data);
        });
    }, [id]);

    return (
        <div>
          <Header/>
          <main>
            <div style={{ padding: '20px'}}>
              {product ? (
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <img 
                        alt={product.title} 
                        src={product.image} 
                        style={{ 
                            width: '60%',
                            }} />
                  </Col>
                  <Col span={16}>
                    <h1>{product.title}</h1>
                    <p className='description'>{product.description}</p>
                    <p className='product-price'>Price: ${product.price}</p>
                    <Button type="primary" className='add-to-cart-button'>Adicionar ao Carrinho</Button>
                  </Col>
                </Row>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </main>
          <Footer/>
        </div>
      );
};
export default ProductDetail;