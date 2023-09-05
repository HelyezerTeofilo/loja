import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=12')
      .then((resposta) => {
        setProdutos(resposta.data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="container mt-4">
        <div className="row">
          {produtos.map((produto) => (
            <div className="col-md-3" key={produto.id}>
              <Card produto={produto} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
