import React, { useContext } from 'react';
import { OrderItem } from '../components/OrderItem';
import flechita from '@icons/flechita.svg';
import '../styles/MyOrder.scss';
import { AppContext } from '../context/AppContext';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const total = () => {
		const reducer = (acc, currentValue) => acc + currentValue.price;
		const sum = state.total.reduce(reducer, 0);
		return sum;
	};
	return (
		<>
			<aside className='MyOrder'>
				<div className='title-container'>
					<img src={flechita} alt='arrow' />
					<p className='title'>My order</p>
				</div>
				<div className='my-order-content'>
					{state.cart.map((product, index) => (
						<OrderItem
							product={product}
							key={`order-item-${product.id}`}
							keyIndex={index}
						/>
					))}
					<div className='order'>
						<p>
							<span>Total</span>
						</p>
						<p>${state.total}</p>
					</div>
					<button className='primary-button'>Checkout</button>
				</div>
			</aside>
		</>
	);
};

export { MyOrder };
