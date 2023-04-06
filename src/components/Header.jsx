import React, { useContext, useState } from 'react';
import { Menu } from '@components/Menu';
import '@styles/Header.scss';
import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';

const Header = () => {
	const { state } = useContext(AppContext);
	const [toggle, setToggle] = useState(false);
	const [toggleOrder, setToggleOrder] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<nav>
				<img src={icon_menu} alt='menu' className='menu' />

				<div className='navbar-left'>
					<img src={logo_yard_sale} alt='nav-logo' className='nav-logo' />

					<ul>
						<li>
							<a href='/'>All</a>
						</li>
						<li>
							<a href='/'>Clothes</a>
						</li>
						<li>
							<a href='/'>Electronics</a>
						</li>
						<li>
							<a href='/'>Furnitures</a>
						</li>
						<li>
							<a href='/'>Toys</a>
						</li>
						<li>
							<a href='/'>Others</a>
						</li>
					</ul>
				</div>

				<div className='navbar-right'>
					<ul>
						<li className='navbar-email' onClick={handleToggle}>
							platzi@example.com
						</li>
						<li
							className='navbar-shopping-cart'
							onClick={() => setToggleOrder(!toggleOrder)}
						>
							<img src={icon_shopping_cart} alt='shopping cart' />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{toggle && <Menu />}
				{toggleOrder && <MyOrder />}
			</nav>
		</>
	);
};

export { Header };
