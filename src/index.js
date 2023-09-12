import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
const roteador = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/productdetail/:id', element: <ProductDetail /> }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={roteador}/>
  </React.StrictMode>
);

reportWebVitals();
