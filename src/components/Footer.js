import '../css/Footer.css';
import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterApp = () => {
  return (
    <Layout className="layout">
      <Footer
        style={{
          textAlign: 'center',
        }}
      className='footer'
      >
        <h4>Informações de Contato</h4>
        Endereço: Rua da Loja, 123 Email: contato@minhaloja.com
        <p>Telefone: (123) 456-7890</p>
      </Footer>
    </Layout>
  );
};

export default FooterApp;
