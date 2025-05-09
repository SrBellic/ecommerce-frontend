import api from '@/utils/api';
import { Product } from '@/interfaces/interfaces';

export async function fetchProduct(productId: number): Promise<Product | null> {
	try {
		const response = await api.get(`/products/${productId}`);

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
