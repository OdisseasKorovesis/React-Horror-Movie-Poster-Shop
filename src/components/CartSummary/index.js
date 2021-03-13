import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useContext } from 'react';
import ProductsContext from '../../context';
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
        <div className="table-container">
            <h2 className="table-title">Cart Summary</h2>
            <Table className="table" size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >Product</TableCell>
                        <TableCell>Unit Price</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartProducts.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell component="th" scope="row">
                                {product.title}
                            </TableCell>
                            <TableCell>{product.vote_average}</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={1}>Total Price</TableCell>
                        <TableCell>{calculateTotalPrice()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    )
}

export default CartSummary;