export const ERROR_MESSAGE = (err: string, restr: string) => {
	return `${err} contiene datos inválidos. ${restr}`;
};

export const TEXT_RESTRICTION = {
	NUMERIC: /\d/,
	ALPHABETIC: /[a-zA-Z]/,
	SQL: /[`"]/,
};

//Categorias para la navegación

export const CATEGORY_LINKS = [
	'Bandolero',
	'Billetera',
	'Cartera',
	'Morral',
	'Viajero',
];

//Ordenes de ejemplo para el resumen
export const ORDERS = [
	{
		customer: 'Juan Díaz',
		price: 213,
		email: 'emailexample@example.com',
	},
	{
		customer: 'Laura Martínez',
		price: 213,
		email: 'emailexample@example.com',
	},
	{
		customer: 'Carlos González',
		price: 213,
		email: 'emailexample@example.com',
	},
	{
		customer: 'María Rodríguez',
		price: 213,
		email: 'emailexample@example.com',
	},
	{
		customer: 'Pedro López',
		price: 213,
		email: 'emailexample@example.com',
	},
];

//Headers para la tabla de productos en el dashboard
export const PRODUCTS_HEADERS = [
	'ID',
	'Nombre',
	'Descripción',
	'Precio',
	'Stock',
	'Estado',
];

//Productos de ejemplo para la tabla de productos
export const PRODUCTS_DATA = [
	{
		id: 1,
		name: 'Producto 1',
		description: 'Descripción del producto 1',
		price: 10.99,
		stock: 5,
		status: 'Activo',
	},
	{
		id: 2,
		name: 'Producto 2',
		description: 'Descripción del producto 2',
		price: 20.99,
		stock: 10,
		status: 'Activo',
	},
	{
		id: 3,
		name: 'Producto 3',
		description: 'Descripción del producto 3',
		price: 30.99,
		stock: 0,
		status: 'Inactivo',
	},
	{
		id: 4,
		name: 'Producto 4',
		description: 'Descripción del producto 4',
		price: 40.99,
		stock: 2,
		status: 'Inactivo',
	},
	{
		id: 5,
		name: 'Producto 5',
		description: 'Descripción del producto 5',
		price: 50.99,
		stock: 8,
		status: 'Activo',
	},
];

//Headers para la tabla de pedidos en el dashboard
export const ORDER_HEADERS = [
	'Orden',
	'Cliente',
	'Fecha',
	'Monto Total',
	'Estado',
	'Cant. Productos',
];

//Pedidos de ejemplo para la tabla de pedidos
export const ORDERS_DATA = [
	{
		id: '#ORD-001',
		customer: 'Juan Díaz',
		date: '2023-05-15',
		total: 249.0,
		status: 'Completado',
		items: 3,
	},
	{
		id: '#ORD-002',
		customer: 'Laura Martínez',
		date: '2023-05-16',
		total: 349.0,
		status: 'Enviado',
		items: 2,
	},
	{
		id: '#ORD-003',
		customer: 'Carlos González',
		date: '2023-05-17',
		total: 199.0,
		status: 'Procesando',
		items: 1,
	},
	{
		id: '#ORD-004',
		customer: 'María Rodríguez',
		date: '2023-05-18',
		total: 399.0,
		status: 'Completado',
		items: 4,
	},
	{
		id: '#ORD-005',
		customer: 'Pedro López',
		date: '2023-05-19',
		total: 299.0,
		status: 'Cancelado',
		items: 2,
	},
	{
		id: '#ORD-006',
		customer: 'Ana García',
		date: '2023-05-20',
		total: 149.0,
		status: 'Enviado',
		items: 1,
	},
	{
		id: '#ORD-007',
		customer: 'Roberto Fernández',
		date: '2023-05-21',
		total: 499.0,
		status: 'Procesando',
		items: 5,
	},
	{
		id: '#ORD-008',
		customer: 'Sofía Pérez',
		date: '2023-05-22',
		total: 199.0,
		status: 'Completado',
		items: 2,
	},
	{
		id: '#ORD-009',
		customer: 'Miguel Torres',
		date: '2023-05-23',
		total: 349.0,
		status: 'Enviado',
		items: 3,
	},
	{
		id: '#ORD-010',
		customer: 'Elena Sánchez',
		date: '2023-05-24',
		total: 279.0,
		status: 'Procesando',
		items: 2,
	},
];
