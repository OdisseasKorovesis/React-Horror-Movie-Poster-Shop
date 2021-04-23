import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useRef } from "react";

function InformationForm(props) {

    const { register, handleSubmit, errors, watch } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        props.toggleShowInfoForm(false);
        props.toggleShowCompletionMessage(true);

    }

    return (
        <div className="container" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title text-white text-center">Enter your Delivery Information</h2>
            <div className="row justify-content-center">
                <form className="form-body p-3 rounded col-6">
                    <div class="form-group">
                        <label for="firstName" className="text-white">First Name</label>
                        <input name="firstName" ref={register({ required: "Enter your First Name" })} type="text" class="form-control" id="form_firstName" placeholder="Enter your First Name" />
                        {errors.firstName && <p>First name is required</p>}
                    </div>
                    <div class="form-group">
                        <label for="lastName" className="text-white">Last Name</label>
                        <input name="lastName" ref={register({ required: "Enter your Last Name" })} type="text" class="form-control" id="form_lastName" placeholder="Enter your Last Name" />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div class="form-group">
                        <label for="address" className="text-white">Address</label>
                        <input name="address" ref={register({ required: "Enter your Address" })} type="text" class="form-control" id="address" placeholder="Enter your Street and Number " />
                        {errors.address && <p>Address is required</p>}
                    </div>
                    <div class="form-group">
                        <label for="city" className="text-white">City</label>
                        <input name="city" ref={register({ required: "Enter your City" })} type="text" class="form-control" id="city" placeholder="Enter your City " />
                        {errors.city && <p>City is required</p>}
                    </div>
                    <div class="form-group">
                        <label for="state" className="text-white">State/Province</label>
                        <input name="state" ref={register({ required: "Enter your State/Province" })} type="text" class="form-control" id="state" placeholder="Enter the state/province your city belongs in" />
                        {errors.state && <p>State/Province is required</p>}
                    </div>
                    <div class="form-group">
                        <label for="postal" className="text-white">Postal Code</label>
                        <input name="postal" ref={register({ required: "Enter your Postal Code" })} type="text" class="form-control" id="state" placeholder="Enter your postal code" />
                        {errors.state && <p>Postal Code is required</p>}
                    </div>
                    <input type="submit" class="btn btn-dark mt-3" value="Finalize order" />
                </form>
            </div>

        </div>
    );
};

export default InformationForm;