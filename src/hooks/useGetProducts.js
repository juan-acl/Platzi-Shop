import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
	const fetchProduct = async () => {
		try {
			const response = await axios.get(API);
			setProducts(response.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchProduct();
	});
	return products;
};

export { useGetProducts };
