import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import OAuth from "./OAuth";
import "./auth.scss";
import { isAuthUser } from "../../helpers/auth";

function Login() {
	const history = useHistory();

	useEffect(() => {
		if (isAuthUser()) {
			history.push("/");
		}
	}, []);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const { email, password } = formData;

	const handleChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		setErrorMsg("");
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		//Validate inputs

		if (isEmpty(email) || isEmpty(password)) {
			setErrorMsg("All fields are required");
		} else if (!isEmail(email)) {
			setErrorMsg("Invalid email format");
		} else {
			let { email, password } = formData;
			let body = { email, password };

			//If there is an error incoming response
			//TODO Signin logic here
		}
	};

	const showLoginForm = () => {
		return (
			<div className='d-flex flex-column'>
				<div className='login-input-wrap mb-4'>
					<p className='login-label mb-0'>Email</p>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						value={email}></input>
				</div>
				<div className='login-input-wrap mb-2'>
					<p className='login-label mb-0'>Password</p>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={password}></input>
				</div>
				<Link
					className='forgot-password mb-4'
					to='/login/forgotpassword'>
					Forgot Password?
				</Link>
				{errorMsg && (
					<small className='mb-2 mt-0 text-danger text-center'>
						{errorMsg}
					</small>
				)}

				<button onClick={handleSubmit} className='sign-in-btn'>
					Sign in
				</button>
			</div>
		);
	};
	return (
		<div
			id='login-main-container'
			className='d-flex flex-column justify-content-center align-items-center'>
			<div>
				<div className='login-content-container mb-5'>
					<div className='mb-4'>
						<h2 className='mb-1'>Sign in</h2>
					</div>
					<OAuth />
					{showLoginForm()}
				</div>
				<div className='text-center'>
					<p>
						Don't have an account?{" "}
						<Link to='/signup' className='font-weight-bold'>
							Join now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
