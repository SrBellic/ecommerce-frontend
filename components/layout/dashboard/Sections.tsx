import { SearchBar } from '@/components/features/Input/SearchBar';
import { maxDescriptionLength } from '@/utils/utils';
import {
	LayoutDashboard,
	ShoppingBag,
	Package,
	User,
	DollarSign,
	CreditCard,
	Plus,
} from 'lucide-react';

//Constantes para la sección de resumen
const RESUME_TABS = [
	{
		label: 'Ingresos Totales',
		icon: <DollarSign size={20} />,
		value: 0,
	},
	{
		label: 'Ventas',
		icon: <CreditCard size={20} />,
		value: 0,
	},
	{
		label: 'Productos Activos',
		icon: <Package size={20} />,
		value: 0,
	},
];

//Ordenes de ejemplo para el resumen
const ORDERS = [
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

const TABLE_HEADERS = [
	'ID',
	'Nombre',
	'Descripción',
	'Precio',
	'Stock',
	'Estado',
];

const TABLE_DATA = [
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

const ORDER_HEADERS = [
	'Orden',
	'Cliente',
	'Fecha',
	'Monto Total',
	'Estado',
	'Cant. Productos',
];

const ORDERS_DATA = [
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

export function ResumeSection() {
	return (
		<>
			<section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
				{RESUME_TABS.map((tab, index) => (
					<article
						key={index}
						className='outline-1 outline-gray-300 bg-white rounded-md w-5/6 p-3'
					>
						<div className='flex items-center justify-between'>
							<p className='text-lg'>{tab.label}</p>
							<span className='text-gray-400'>{tab.icon}</span>
						</div>
						<p className='text-2xl font-bold'>
							{index === 0 ? `$${tab.value.toFixed(2)}` : tab.value}
						</p>
					</article>
				))}
			</section>
			<section className='outline-1 outline-gray-300 rounded-md p-3 w-1/2 mt-4'>
				<h2 className='font-bold text-2xl'>Ventas Recientes</h2>
				<p className='text-gray-500'>Últimas transacciones realizadas.</p>
				{ORDERS.map((order, index) => (
					<article
						key={index}
						className='py-2 flex justify-between items-center '
					>
						<div>
							<p>{order.customer}</p>
							<p className='text-gray-500'>{order.email}</p>
						</div>
						<p>${order.price.toFixed(2)}</p>
					</article>
				))}
			</section>
		</>
	);
}

export function ProductsSection() {
	return (
		<section className='outline-1 outline-gray-300 rounded-md p-3 mx-8'>
			<h2 className='font-bold text-2xl'>Gestión de Productos</h2>
			<p className='text-gray-500'>Administra los productos de tu tienda.</p>
			<div className='flex justify-between items-center mt-4'>
				<SearchBar />
				<button className='cursor-pointer flex justify-between bg-blue-600 hover:bg-blue-700 transition text-white rounded-md py-2 px-4'>
					<span className='mr-2'>
						<Plus size={24} />
					</span>
					<span>Agregar Producto</span>
				</button>
			</div>
			<div className='w-full overflow-auto relative'>
				<table className='w-full mt-4 outline-1 outline-gray-300 rounded-md'>
					<thead>
						<tr>
							{TABLE_HEADERS.map((header, index) => (
								<td
									key={index}
									className='text-left py-2 px-4 font-bold text-gray-700'
								>
									{header}
								</td>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_DATA.map((data, index) => (
							<tr
								key={index}
								className='cursor-pointer border-t border-gray-200 hover:bg-gray-200'
							>
								<td className='py-2 px-4'>{data.id}</td>
								<td className='py-2 px-4'>{data.name}</td>
								<td className='py-2 px-4 text-gray-500'>
									{maxDescriptionLength(data.description, 20)}
								</td>
								<td className='py-2 px-4'>${data.price.toFixed(2)}</td>
								<td className='py-2 px-4'>{data.stock}</td>
								<td className='py-2 px-4'>
									<span
										className={`${
											data.status === 'Activo'
												? 'bg-blue-500 px-3.5'
												: 'bg-gray-400'
										} text-white rounded-full px-2 py-0.5 text-sm`}
									>
										{data.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export function OrdersSection() {
	return (
		<section className='outline-1 outline-gray-300 rounded-md p-3 mx-8'>
			<h2 className='font-bold text-2xl'>Pedidos</h2>
			<p className='text-gray-500'>
				Consulta y gestiona los pedidos de tus clientes
			</p>
			<div className='flex justify-between items-center mt-4'>
				<SearchBar />
				<div className='w-1/4 flex justify-around'>
					<select className='bg-white border border-gray-300 rounded-md py-2'>
						<option value='todos'>Todos</option>
						<option value='completado'>Completado</option>
						<option value='en progreso'>En Progreso</option>
						<option value='pendiente'>Pendiente</option>
					</select>
					<button className='outline-1 outline-gray-300 px-4 rounded-md'>
						Fecha
					</button>
				</div>
			</div>
			<div className='relative w-full overflow-auto'>
				<table className='w-full mt-4 outline-1 outline-gray-300 rounded-md'>
					<thead>
						<tr>
							{ORDER_HEADERS.map((header, index) => (
								<td
									key={index}
									className='text-left py-2 px-4 font-bold text-gray-700'
								>
									{header}
								</td>
							))}
						</tr>
					</thead>
					<tbody>
						{ORDERS_DATA.map((data, index) => (
							<tr
								key={index}
								className='cursor-pointer border-t border-gray-200 hover:bg-gray-200'
							>
								<td className='py-2 px-4'>{data.id}</td>
								<td className='py-2 px-4'>{data.customer}</td>
								<td className='py-2 px-4 text-gray-500'>{data.date}</td>
								<td className='py-2 px-4'>${data.total.toFixed(2)}</td>
								<td className='py-2 px-4'>{data.status}</td>
								<td className='py-2 px-4 text-center'>{data.items}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
