export interface User {
	id: number;
	name: string;
	lastName: string;
	cedula: number | string;
	email: string;
	password: string;
	phone: number | string;
	address: string;
}

export interface Product {
	id: number;
	name: string;
	marca: string;
	description: string;
	price: number;
	stock: number; //Interfaz que se usará
	color_id: number;
	category_id: string;
	status: boolean;
	created_by: number;
}
