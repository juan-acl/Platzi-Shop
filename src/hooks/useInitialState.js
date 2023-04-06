import { useState } from 'react';

const initialState = {
	cart: [],
	total: 0,
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);
	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, { ...payload, idCart: state.cart.length + 1 }],
			total: state.total + payload.price,
		});
	};
	const removeToCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter((item) => item.id !== payload.id),
		});
	};
	return {
		state,
		addToCart,
		removeToCart,
	};
};

export { useInitialState };
