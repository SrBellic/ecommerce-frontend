'use client';

import { useState } from 'react';
import {
	ResumeSection,
	ProductsSection,
	OrdersSection,
} from '@/components/layout/dashboard/Sections';
import { LayoutDashboard, ShoppingBag, Package, User } from 'lucide-react';

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
			<div className='grid-cols md:grid-cols-2 justify-between space-y-4 p-4 md:p-8 pt-6'>
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
					<ResumeSection />
				</>
			)}
			{renderCategory === 'Productos' && (
				<>
					<ProductsSection />
				</>
			)}
			{renderCategory === 'Pedidos' && (
				<>
					<OrdersSection />
				</>
			)}
		</>
	);
}
