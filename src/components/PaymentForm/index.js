import { useForm } from 'react-hook-form';

function PaymentForm(props) {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {
        props.toggleShowPaymentForm(false);
        props.toggleShowInfoForm(true);
    };

    const removeSpacesFromCCNumber = (event) => {
        const updatedNumber = event.target.value.replace(" ", "");
        document.getElementById('cardNumber').value = updatedNumber;
    }

    return (
        <>
            <div className="payment-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title h2 text-center mb-4 text-white">Enter your payment details</h2>
                <div class="row justify-content-center">
                    <form className=" form-body rounded col-6 p-3">
                        <div class="icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                        <div class="form-group">
                            <label for="firstName" className="text-white">Cardholder's Name</label>
                            <input name="firstName" ref={register({ required: "Enter cardholder's name" })} type="text" class="form-control" id="firstName" placeholder="Enter cardholder's name" />
                            {errors.firstName && <p className="text-danger font-italic">Cardholder's name is required</p>}
                        </div>
                        <div class="form-group">
                            <label for="cardNumber" className="text-white">Credit Card Number</label>
                            <input name="cardNumber"
                                ref={register({
                                    required: true,
                                    pattern: { value: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/ }
                                })}
                                type="text"
                                class="form-control"
                                id="cardNumber"
                                placeholder="Enter a 16-digit card number"
                                onChange={removeSpacesFromCCNumber} />
                            {errors.cardNumber?.type === "required" && <p className="text-danger font-italic">Card number is required</p>}
                            {errors.cardNumber?.type === "pattern" && <p className="text-danger font-italic">Please enter a valid credit card number</p>}
                        </div>
                        <div class="form-group">
                            <label for="expiryDate" className="text-white">Expiry Date</label>
                            <input name="expiryDate" ref={register({ required: "Enter card's expiry date" })} type="text" class="form-control" id="expiryDate" placeholder="MM/YYYY" />
                            {errors.expiryDate && <p className="text-danger font-italic">Expiry date is required</p>}
                        </div>
                        <div class="form-group">
                            <label for="cvv" className="text-white">CVV Number</label>
                            <input name="cvv" ref={register({ required: true, pattern: { value: /^[0-9]{3,4}$/ } },)} type="text" class="form-control" id="cvv" placeholder="Please enter CVV number" />
                            {errors.cvv?.type === "required" && <p className="text-danger font-italic">CVV number is required</p>}
                            {errors.cvv?.type === "pattern" && <p className="text-danger font-italic">Please enter a valid CVV number</p>}
                        </div>
                        <input type="submit" class="btn btn-dark mt-3" value="Next Step" />
                    </form>
                </div>

            </div>
        </>
    )
};

export default PaymentForm;