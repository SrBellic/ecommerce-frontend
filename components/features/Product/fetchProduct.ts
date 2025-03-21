import api from '@/utils/api';
import { Product } from '@/interfaces/interfaces';

async function fetchProduct(productId: number): Promise<Product | null> {
	try {
		const response = await api.get(`/products/${productId}`);

		console.log(response.data);

		return response.data as Product;
	} catch (err) {
		return null;
	}
}

export default fetchProduct;
