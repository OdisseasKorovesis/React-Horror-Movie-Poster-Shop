import './App.css';
import ListOfProducts from './pages/ListOfProducts';
import { useEffect, useState } from 'react';
import ProductsContext from './context'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ProductInfo from './components/ProductInfo'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  let [listOfProducts, setListOfProducts] = useState([]);

  const removeFromCart = (id) => {
    cartProducts.forEach((product) => {
      if (product.id == id) {
        console.log('mpike')
        setCartProducts(cartProducts.filter(product => product.id !== id));
      }
    });
  }

  const addToCart = (id) => {
    listOfProducts.forEach((product) => {
      if (product.id == id) {
        console.log('mpike');
        setCartProducts(oldArray => [...oldArray, product]);
      }
    });
  };

  const changeQuantity = (id, newQuantity) => {
    cartProducts.forEach((product, index) => {
      if (product.id == id) {
        let updatedCartProducts = [...cartProducts];
        updatedCartProducts[index].quantity = newQuantity;
        setCartProducts(updatedCartProducts);
      }
    });
  };



  const { response, query, setQuery } = useFetch('discover/movie', 'with_genres=27&page=3');
  console.log(response.results);
  listOfProducts = response.results;

  return (
    <div className="main-container">
      <Router>
        <ProductsContext.Provider value={{ listOfProducts, cartProducts, addToCart, removeFromCart, changeQuantity }}>
          <Navbar />
          <div>
            <Route exact path='/' component={listOfProducts && ListOfProducts} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={ProductInfo} />
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/login' component={Login} />
          </div>
        </ProductsContext.Provider>
      </Router>
    </div>

  );
}

export default App;
