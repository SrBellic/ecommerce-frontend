'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/features/Input/SearchBar';
import ShoppingKart from '@/components/UI/Button/Shopping/ShoppingKart';
import Link from 'next/link';
import Carousel from '@/components/layout/content/Carousel';

export default function Home() {
	const [kartCount, setKartCount] = useState(0);

	return (
		<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			{/* Hero Banner */}
			<div className='relative bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl overflow-hidden my-6'>
				<div className='absolute inset-0'>
					<div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 mix-blend-multiply' />
				</div>
				<div className='relative max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl'>
						Basic eCommerce
					</h1>
					<p className='mt-4 max-w-3xl text-xl text-indigo-100'>
						Encuentra los mejores accesorios para tu uso personal
					</p>
					<div className='mt-8 flex'>
						<SearchBar />
						<div className='ml-4'>
							<ShoppingKart kart={kartCount} />
						</div>
					</div>
				</div>
			</div>

			{/* Categories */}
			<div className='my-8'>
				<h2 className='text-2xl font-bold text-gray-900 mb-6'>Categorías</h2>
				<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
					{/* Estas categorías van a sufrir cambios según sean los productos que se vendan*/}
					{['Bandolero', 'Billetera', 'Cartera', 'Morral', 'Viajero'].map(
						(category) => (
							<Link
								key={category}
								href='#'
								className='bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4 text-center hover:bg-indigo-50'
							>
								<span className='font-medium text-gray-800'>{category}</span>
							</Link>
						)
					)}
				</div>
			</div>

			{/* Featured Products */}
			<div className='my-12'>
				<section className='flex items-center justify-between mb-6'>
					<h2 className='text-2xl font-bold text-gray-900'>
						Productos Destacados
					</h2>
					<div className='flex space-x-2'>
						<Link
							href='#'
							className='text-indigo-600 hover:text-indigo-800 font-medium'
						>
							Ver todos
						</Link>
					</div>
				</section>
				<Carousel />
			</div>
			<div className='my-12'>
				<section className='flex items-center justify-between mb-6'>
					<h2 className='text-2xl font-bold text-gray-900'>
						Podría interesarte
					</h2>
					<div className='flex space-x-2'>
						<Link
							href='#'
							className='text-indigo-600 hover:text-indigo-800 font-medium'
						>
							Ver todos
						</Link>
					</div>
				</section>
				<Carousel />
			</div>
		</main>
	);
}
