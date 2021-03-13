import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../../context';
import './index.css'



function Navbar() {

  const { listOfProducts, cartProducts, changeListOfProducts } = useContext(ProductsContext);
  

  return (
    <div >
      <AppBar position="static">
        <Toolbar className="content">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="h6">
              Home
          </Typography>
          </Link>
          <IconButton className="cart-icon" edge="start" color="inherit" aria-label="menu">
            <Link to="/cart">
              <ShoppingCartIcon edge="end" />
            </Link>
          </IconButton>
          <div className="products-number">
            <Typography variant="h6">
              {cartProducts.length}
            </Typography>
          </div>
          <Link to="/registration">
            <Typography variant="h6">
              Registration
              </Typography>
          </Link>
          <Link to="/login">
            <Typography variant="h6">
              Login
              </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>

  )

};

export default Navbar;

