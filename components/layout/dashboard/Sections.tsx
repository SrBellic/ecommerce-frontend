'use client';
// import { useState } from 'react';
import { SearchBar } from '@/components/features/Input/SearchBar';
import { maxDescriptionLength } from '@/utils/utils';
import {
	Package,
	DollarSign,
	CreditCard,
	Plus,
	CalendarDays,
} from 'lucide-react';
import {
	ORDERS,
	PRODUCTS_HEADERS,
	PRODUCTS_DATA,
	ORDER_HEADERS,
	ORDERS_DATA,
} from '@/utils/constants';

//Constantes para la sección de resumen en el dashboard
export const RESUME_TABS = [
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
			<div className='flex-cols md:flex space-y-2 md:space-y-0 justify-between mt-4 items-center'>
				<SearchBar />
				<button className='cursor-pointer flex justify-around bg-blue-600 hover:bg-blue-700 transition text-white rounded-md py-2 px-4'>
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
							{PRODUCTS_HEADERS.map((header, index) => (
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
						{PRODUCTS_DATA.map((data, index) => (
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
			<div className='flex-cols md:flex space-y-3 md:space-y-0 justify-between items-center mt-4'>
				<SearchBar />
				<div className='w-full md:w-1/3 flex justify-around items-center'>
					<select className='bg-white w-full md:w-max border border-gray-300 rounded-md py-2'>
						<option value='todos'>Todos</option>
						<option value='completado'>Completado</option>
						<option value='en progreso'>En Progreso</option>
						<option value='pendiente'>Pendiente</option>
					</select>
					<button className='w-full md:w-max cursor-pointer flex items-center bg-blue-600 hover:bg-blue-700 transition text-white px-3 py-2 rounded-md'>
						<span>
							<CalendarDays strokeWidth={1.75} />
						</span>
						<span className='mx-3'>Fecha</span>
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

export function ProfileSection() {
	// const [profileSettings, setProfileSettings] = useState(true);

	return (
		<section className='outline-1 outline-gray-300 rounded-md p-3 mx-8'>
			<h2 className='font-bold text-2xl'>Perfil</h2>
			<p className='text-gray-500'>Gestiona tu perfil y preferencias.</p>
			{/* <div className='flex justify-center items-center mt-4'>
				<nav className='w-full flex justify-between bg-slate-200 rounded-md mt-4 p-1'>
					<button
						className={`${
							profileSettings ? 'bg-white text-black' : 'text-gray-500'
						} w-full py-1 rounded-md transition-all duration-100 cursor-pointer`}
						onClick={() => setProfileSettings(true)}
					>
						<span>Información Personal</span>
					</button>
					<button
						className={`${
							!profileSettings ? 'bg-white text-black' : 'text-gray-500'
						} w-full py-1 rounded-md transition-all duration-100 cursor-pointer`}
						onClick={() => setProfileSettings(false)}
					>
						<span>Notificaciones</span>
					</button>
				</nav>
			</div> */}
			<div>
				<form
					action=''
					className='flex flex-col space-y-4 mt-4'
				>
					<div className='flex flex-row justify-around'>
						<input
							className='outline-1 outline-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400'
							type='text'
							name='phone'
							placeholder='Télefono'
						/>
						<input
							className='outline-1 outline-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400'
							type='email'
							name='email'
							placeholder='Correo Electrónico'
						/>
					</div>
					<textarea
						name='adress'
						placeholder='Ingrese su dirección completa'
						className='w-full min-h-[80px] max-h-[100px] px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
					/>
					<div className='flex justify-end'>
						<button
							type='submit'
							className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-3'
						>
							Guardar
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
