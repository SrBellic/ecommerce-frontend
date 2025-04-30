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
	brand: string;
	description: string;
	price: number;
	stock: number; //Interfaz que se usará
	color: string;
	category: string;
	status: boolean;
	created_by: number;
	isNew?: boolean;
	discount?: number | null;
}
