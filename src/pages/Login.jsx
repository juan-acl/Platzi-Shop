import React, { useRef } from 'react';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'), //Los trae por medio del name del input
			password: formData.get('password'),
		};
		console.log(data);
	};

	return (
		<>
			<div className='Login'>
				<div className='Login-container'>
					<img src={logo_yard_sale} alt='logo' className='logo' />

					<form className='form' ref={form}>
						<label htmlFor='email' className='label'>
							Email address
						</label>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='platzi@example.cm'
							className='input input-email'
						/>

						<label htmlFor='password' className='label'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='*********'
							className='input input-password'
						/>

						<button
							type='submit'
							className='primary-button login-button'
							onClick={handleSubmit}
						>
							Log in
						</button>
						<a href='/'>Forgot my password</a>
					</form>
					<button className='secondary-button signup-button'>Sign up</button>
				</div>
			</div>
		</>
	);
};

export { Login };
