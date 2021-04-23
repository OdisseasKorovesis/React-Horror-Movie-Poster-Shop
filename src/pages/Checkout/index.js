import CartSummary from "../../components/CartSummary";
import PaymentForm from "../../components/PaymentForm";
import InformationForm from '../../components/InformationForm';
import { useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Checkout() {

    const [showPaymentForm, setShowPaymentForm] = useState(true);
    const [showInfoForm, setShowInfoForm] = useState(false);
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-2">
                    <CartSummary />
                </div>
                <div className="col-6">
                    {!showPaymentForm ? <></> :
                        <PaymentForm toggleShowPaymentForm={setShowPaymentForm} toggleShowInfoForm={setShowInfoForm} />}
                    {!showInfoForm ? <> </> : <InformationForm toggleShowInfoForm={setShowInfoForm} toggleShowCompletionMessage={setShowCompletionMessage} />}
                    {!showCompletionMessage ? <></> : <h2 className="text-white completion-message">
                        Thank you for shopping from the Horror Movie Poster Shop!
                        <br/>
                        <br/>
                        You will receive a confirmation email, as soon as your order is processed.
                        <br/>
                        Meanwhile you can browse more items &nbsp;
                        <Link className="link-to-home" to="/React-Horror-Movie-Poster-Shop/"><span className="link-to-home">here</span></Link>.
                        </h2>}
                </div>

            </div>

        </div>

    )
};

export default Checkout;