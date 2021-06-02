import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import Login from './pages/Login/Login';
import Home from './components/layout/Home/Home';
import Products from './pages/Products/Prducts';
import Cart from './pages/Cart/Cart';
import Users from './pages/Users/Users';
import AuthProvider from './store/AuthProvider';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
            </Switch>
          </Layout>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
