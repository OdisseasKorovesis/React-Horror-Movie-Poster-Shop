import { useForm } from "react-hook-form";
import { useRef } from "react";

function RegistrationForm() {

    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log('Form Submitted Succesfully');
        console.log(`Data submitted: ${JSON.stringify(data)}`);
    }

    return (
        <div className="container border p-3" onSubmit={handleSubmit(onSubmit)}>
            <form >
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input name="firstName" ref={register({ required: "Enter your First Name" })} type="text" class="form-control" id="form_firstName" placeholder="Enter Your First Name" />
                    {errors.firstName && <p>First name is required</p>}
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input name="lastName" ref={register({ required: "Enter your Last Name" })} type="text" class="form-control" id="form_lastName" placeholder="Enter Your Last Name" />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input name="email" ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }},)} type="text" class="form-control" id="email" placeholder="Enter Your Email" />
                    {errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "pattern" && "Please enter valid email"}
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input name="password" ref={register({ required: true, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/ }},)} type="password" class="form-control" id="password" placeholder="Enter Desired Password" />
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "pattern" && "Password must be longer than 6 characters and contain: 1 uppercase, 1 lowercase, 1 special, 1 number"}
                </div>
                <div class="form-group">
                    <label for="repeatPassword">Password</label>
                    <input name="repeatPassword" ref={register({validate: value => value === password.current || "The passwords do not match"})} type="password" class="form-control" id="repeatPassword" placeholder="Repeat Your Password" />
                    {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
                </div>
                <div class="form-check">
                    <input name="terms" ref={register({required: "You must accept the terms in order to continue."})} type="checkbox" class="form-check-input" id="terms" />
                    {errors.terms && <p>{errors.terms.message}</p>}
                    <label class="form-check-label" for="terms">Click to Accept the Terms</label>
                </div>
                <input type="submit" class="btn btn-primary mt-3" />
            </form>
        </div>
    );
};

export default RegistrationForm;