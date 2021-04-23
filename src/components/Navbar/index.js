import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../../context';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'



function Navbar() {

  const { listOfProducts, cartProducts, changeListOfProducts } = useContext(ProductsContext);

  return (
    <div className="navbar-container">
      <nav class="navbar fixed-top navbar-light p-4 justify-content-center">
        <Link to="/React-Horror-Movie-Poster-Shop/">
          <i class="fas fa-ghost"> <span> Home</span></i>
        </Link>
        <Link to="/React-Horror-Movie-Poster-Shop/cart">
          <div className="ml-3 cart-icon">
            <i class="fas fa-shopping-cart"> <span> Cart</span></i>
            <div className="products-number">
              {cartProducts.length}
            </div>
          </div>
        </Link>
        <Link to="/React-Horror-Movie-Poster-Shop/login">
          <div className="ml-3">
          <i class="fas fa-sign-in-alt"> <span> Sign in</span></i>
          </div>
        </Link>
        <Link to="/React-Horror-Movie-Poster-Shop/registration">
          <div className="ml-3">
          <i class="fas fa-address-card"> <span> Register</span></i>
          </div>
        </Link>
      </nav>
    </div>


  )

};

export default Navbar;

