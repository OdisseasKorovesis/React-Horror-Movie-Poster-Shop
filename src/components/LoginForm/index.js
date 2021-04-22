import { useForm } from 'react-hook-form';
import './index.css'

function LoginForm() {
    const { register, handleSubmit, errors } = useForm();

    const registeredUsers = [
        {
            email: 'antegeia21@hotmail.com',
            password: '1qaz!QAZ'
        }
    ];

    const onSubmit = (data) => {
        console.log('Form Submitted Succesfully');
        const submittedEmail = data.email;
        const submittedPassword = data.password;
        console.log(`Data submitted: ${JSON.stringify(data)}`);

        registeredUsers.forEach((user) => {
            if (user.email === submittedEmail && user.password === submittedPassword) {
                console.log("Succesful login!");
            } else if (user.email === submittedEmail && user.password !== submittedPassword) {
                console.log("Wrong Password!");
            } else {
                console.log("Cannot find account with specified email!")
            }
        })
    }

    return (


        <div className="container p-3" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title h2 text-center mb-4 text-white">Log in to the Shop</h2>
            <div class="row justify-content-center">
                <form className=" form-body rounded col-6 p-3">
                    <div class="form-group">
                        <label className="text-white" for="email">Email address</label>
                        <input name="email" ref={register({ required: "Email is required" })} type="text" class="form-control" id="email" placeholder="Enter your Email" />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div class="form-group">
                        <label className="text-white" for="password">Password</label>
                        <input name="password" ref={register({ required: "Password is required" })} type="password" class="form-control" id="password" placeholder="Enter your Password" />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <input type="submit" class="btn btn-dark mt-3" />
                </form>
            </div>

        </div>
    );
};

export default LoginForm;