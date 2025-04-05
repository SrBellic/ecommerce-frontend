export interface Product {
	id: number;
	name: string;
	created_by: number;
	marca: string;
}

export interface User {
	id: number;
	name: string;
	lastName: string;
	cedula: number | string;
	email: string;
	password: string;
	phone: number | string;
	address: string;
	edad: number; //Borrar
}
/*interface Product {
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
