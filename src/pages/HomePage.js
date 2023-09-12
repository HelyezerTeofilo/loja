import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/HomePage.css';
import { Row } from 'antd';
import CarouselApp from '../components/Carousel';

function App() {
  const [products, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((resposta) => {
        setProdutos(resposta.data);
      });
  }, []);

  return (
    <div className="App">
      <Header/>
      <CarouselApp products={products}></CarouselApp>
      <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Card key={product.id} produto={product} />
      ))}
    </Row>
      <Footer/>
    </div>
  );
}

export default App;
