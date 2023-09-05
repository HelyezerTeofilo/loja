import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="store-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src="/storeLogo.png" alt="Logo da Loja" className="store-logo" />
          </div>
          <div className="col-md-6">
            <nav className="main-menu">
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </nav>
          </div>  
        </div>
      </div>
    </header>
  );
}

export default Header;
