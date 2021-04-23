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
import CartProduct from './components/CartProduct';
import PaymentForm from './components/PaymentForm';
import Checkout from './pages/Checkout';

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  let [listOfProducts, setListOfProducts] = useState([]);

  const removeFromCart = (id) => {
    const updatedList = new Array();
    cartProducts.forEach((product) => {
      
      if (product.id == id) {
        
      } else {
        updatedList.push(product);
      }
      setCartProducts(updatedList);
    });
  }

  const addToCart = (id) => {
    listOfProducts.forEach((product) => {
      if (product.id == id) {
        let productExistsInCart = false;
        for (const cartProduct of cartProducts) {
          if (cartProduct.id == product.id) {
            alert('This product is already in your cart! If you want to increase the quantity, you can do so inside the cart.')
            productExistsInCart = true;
          }
        }
        if(!productExistsInCart) {
          setCartProducts(oldArray => [...oldArray, product]);
        }
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
            <Route exact path='/checkout' component={Checkout}/>
          </div>
        </ProductsContext.Provider>
      </Router>
    </div>

  );
}

export default App;
