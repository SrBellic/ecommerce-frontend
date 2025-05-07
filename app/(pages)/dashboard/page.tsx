'use client';

import { useState } from 'react';
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

export default function Page() {
	//constantes para los botones de la barra de navegación
	const CATEGORY_BUTTONS = [
		{
			label: 'Resumen',
			icon: <LayoutDashboard strokeWidth={1.5} />,
		},
		{
			label: 'Productos',
			icon: <ShoppingBag strokeWidth={1.5} />,
		},
		{
			label: 'Pedidos',
			icon: <Package strokeWidth={1.5} />,
		},
		{
			label: 'Perfil',
			icon: <User strokeWidth={2} />,
		},
	];

	//Constantes para los datos del resumen
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

	//Ordenes de ejemplo
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

	//Constantes para los encabezados de la tabla de productos
	const TABLE_HEADERS = [
		'ID',
		'Nombre',
		'Descripción',
		'Precio',
		'Stock',
		'Estado',
		'Acciones',
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

	const [activeCategory, setActiveCategory] = useState(0);
	const [renderCategory, setRenderCategory] = useState(
		CATEGORY_BUTTONS[0].label
	);

	const handlerCategory = (index: number) => {
		setActiveCategory(index);
		setRenderCategory(CATEGORY_BUTTONS[index].label);
	};

	return (
		<>
			<div className='flex justify-between space-y-4 p-4 md:p-8 pt-6'>
				<h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
				<nav className='grid grid-cols-2 md:grid-cols-4 gap-2 py-1.5'>
					{CATEGORY_BUTTONS.map((category, index) => (
						<button
							key={index}
							className={`${
								activeCategory === index
									? 'bg-blue-600 hover:bg-blue-700 text-white outline-none'
									: 'outline-gray-300 hover:bg-gray-100'
							} cursor-pointer rounded flex items-center justify-center md:justify-start py-1.5 px-2 outline-1 transition`}
							onClick={() => handlerCategory(index)}
						>
							<span>{category.icon}</span>
							<span>{category.label}</span>
						</button>
					))}
				</nav>
			</div>
			{renderCategory === 'Resumen' && (
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
			)}
			{renderCategory === 'Productos' && (
				<>
					<section className='outline-1 outline-gray-300 rounded-md p-3 mx-8'>
						<h2 className='font-bold text-2xl'>Gestión de Productos</h2>
						<p className='text-gray-500'>
							Administra los productos de tu tienda.
						</p>
						<div className='flex justify-between items-center mt-4'>
							<SearchBar />
							<button className='cursor-pointer flex justify-between bg-blue-600 hover:bg-blue-700 transition text-white rounded-md py-2 px-4'>
								<span className='mr-2'>
									<Plus size={24} />
								</span>
								<span>Agregar Producto</span>
							</button>
						</div>
						<table className='w-full mt-4 outline-1 outline-gray-300 rounded-md'>
							<thead>
								{TABLE_HEADERS.map((header, index) => (
									<th
										key={index}
										className='text-left py-2 px-4 font-bold text-gray-700'
									>
										{header}
									</th>
								))}
							</thead>
							<tbody>
								{TABLE_DATA.map((data, index) => (
									<tr
										key={index}
										className='border-b border-t border-gray-200'
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
										{/* <td>
                                            <button className="bg-blue-500 rounded text-white hover:bg-blue-600 py-1 px-2"></button>
                                            <button className="bg-blue-500 rounded text-white hover:bg-blue-600 py-1 px-2"></button>
                                        </td> */}
									</tr>
								))}
							</tbody>
						</table>
					</section>
				</>
			)}
		</>
	);
}
