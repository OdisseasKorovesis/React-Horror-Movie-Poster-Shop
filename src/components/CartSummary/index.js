import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useContext } from 'react';
import ProductsContext from '../../context';
import {Link} from 'react-router-dom';
import './index.css';


function CartSummary() {

    const { listOfProducts, cartProducts, addToCart, removeFromCart } = useContext(ProductsContext);

    const calculateTotalPrice = () => {
        let sum = 0;
        cartProducts.forEach((product) => {
            sum += product.quantity * product.vote_average;
        })
        return (Math.round(sum * 100) / 100).toFixed(2);
    }

    return (
        <div className="table-container border border-white rounded text-white p-2">
            <h2 className="table-title">Cart Summary</h2>
            <Table className="table" size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow className="text-white">
                        <TableCell className="text-white">Product</TableCell>
                        <TableCell className="text-white">Unit Price</TableCell>
                        <TableCell className="text-white">Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartProducts.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell component="th" scope="row" className="text-white">
                                {product.title}
                            </TableCell>
                            <TableCell className="text-white">{product.vote_average}€</TableCell>
                            <TableCell className="text-white">{product.quantity}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell className="text-white" colSpan={1}>Total Price</TableCell>
                        <TableCell className="text-white">{calculateTotalPrice()}€</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {cartProducts.length !== 0 ? <div className="row justify-content-center">
                <Link to="/checkout">
                    <button className="btn">Checkout</button>
                </Link>
            </div> : <></>}
            

        </div>

    )
}

export default CartSummary;