import { createContext } from 'react';
  
const ProductsContext = createContext({
    listOfProducts: [],
    cartProducts: [],
    addToCart: () => {},
    removeFromCart: () => {},
    changeQuantity: () => {},
    changeListOfProducts: () => {}
});

export default ProductsContext;