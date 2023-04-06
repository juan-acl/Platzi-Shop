import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import icon_close from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

const OrderItem = ({ product }) => {
	const { removeToCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeToCart(product);
	};
	return (
		<>
			<div className='OrderItem'>
				<figure>
					<img src={product.images[0]} alt={product.title} />
				</figure>
				<p>{product.title}</p>
				<p>${product.price}</p>
				<img
					src={icon_close}
					alt='close'
					onClick={() => handleRemove(product)}
				/>
			</div>
		</>
	);
};

export { OrderItem };
