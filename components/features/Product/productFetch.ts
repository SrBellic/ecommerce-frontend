const axios = require('axios');

/*interface Request {
	product: {
		name: string;
		description: string;
		price: number;
		stock: number;  //Interfaz que se usará
		color_id: number;
		category_id: string;
		status: boolean;
	};
}*/

interface Request {
	product: {
		id: number;
		name: string;
		created_by: number;
		marca: string;
	};
}

async function getProductData(
	productId: number
): Promise<Request['product'] | null> {
	try {
		const response = await axios.get(
			`http://localhost:3001/product/${productId}`
		);

		return response.data as Request['product'];
	} catch (err) {
		return null;
	}
}
