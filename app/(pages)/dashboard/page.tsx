'use client';

import { useState } from 'react';
import {
	LayoutDashboard,
	ShoppingBag,
	Package,
	User,
	DollarSign,
	CreditCard,
} from 'lucide-react';

export default function Page() {
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
									? 'bg-blue-600 text-white outline-none'
									: 'outline-gray-300'
							} cursor-pointer rounded flex items-center justify-center md:justify-start py-1.5 px-2 outline-1`}
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
		</>
	);
}
