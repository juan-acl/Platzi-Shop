import React, { useState } from 'react';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const handleClick = (e) => {
		setCart(alert('Clicked'));
	};

	return (
		<>
			<div className='ProductItem'>
				<img src={product.images[0]} alt={product.title} />
				<div className='product-info'>
					<div>
						<p>${product.price}</p>
						<p>{product.title}</p>
					</div>
					<figure onClick={handleClick}>
						<img src={bt_add_to_cart} alt='bt_add_to_cart' />
					</figure>
				</div>
			</div>
		</>
	);
};

export { ProductItem };
