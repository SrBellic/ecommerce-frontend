import api from '@/utils/api';
import { Product } from '@/interfaces/interfaces';

export default async function fetchProduct(
	productId: number
): Promise<Product | null> {
	try {
		const response = await api.get(`/products/${productId}`);

		console.log(response.data);

		return response.data as Product;
	} catch (err) {
		return null;
	}
}

export async function fetchProductList(
	category: string
): Promise<Product[] | null> {
	try {
		const response = await api.get(`/products/category/${category}`);

		return response.data as Product[];
	} catch (err) {
		return null;
	}
}
