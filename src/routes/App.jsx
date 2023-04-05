import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import '../styles/global.css';
import { SendEmail } from '../pages/SendEmail';
import { NewPassword } from '../pages/NewPassword';
import { MyAccount } from '../pages/MyAccount';
import { CreateAccount } from '../pages/CreateAccount';
import { Checkout } from '../pages/Checkout';
import { Orders } from '../pages/Orders';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/home' element={<Home />} />
						<Route exact path='/login' element={<Login />} />
						<Route
							exact
							path='/recovery-password'
							element={<RecoveryPassword />}
						/>
						<Route exact path='/send-email' element={<SendEmail />} />
						<Route exact path='/new-password' element={<NewPassword />} />
						<Route exact path='/account' element={<MyAccount />} />
						<Route exact path='/signup' element={<CreateAccount />} />
						<Route exact path='/checkout' element={<Checkout />} />
						<Route exact path='/Orders' element={<Orders />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
};

export { App };
