import logo from './logo.svg';
import './App.less';
import 'antd/dist/antd.min.css';
import ButtonComponent from './component/ButtonComponent';
import LayoutComponent from './component/Home/LayoutComponent';
import LoginComponent from './component/GoogleOauth/LoginComponent';
import LogoutComponent from './component/GoogleOauth/LogoutComponent';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import GoogleComponent from './component/GoogleOauth/GoogleComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetail from './component/Home/ProductDetail';
import CartComponent from './component/Cart/CartComponent';

function App() {

  const clientId = '300743791388-umhahq8clqrnnjfrpj4bp7q2hc2n9g5e.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'email'
      })
    }
    gapi.load('client:auth2', initClient);
  }, [])

  return (
    <div className="App">
      hgdfhgfg
      {/* <GoogleComponent /> */}
      {/* <LayoutComponent /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true} element={<GoogleComponent />} />
          <Route path='/home' element={<LayoutComponent />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/carts' element={<CartComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
