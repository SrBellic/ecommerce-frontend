import testImage from '@/public/statics/JPEG/TEST5.png';

import Image from 'next/image';
import { ShoppingCart, Heart } from 'lucide-react';

export default function Card({ id }: { id: number }) {
	return (
		<div className='group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
			{/* Badge */}
			{/* {id % 3 === 0 && (
				<div className='absolute top-2 left-2 z-10'>
					<span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800'>
						Nuevo
					</span>
				</div>
			)} */}

			{/* Wishlist button */}
			{/* <button className='absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-rose-500 transition-colors'>
				<Heart className='h-5 w-5' />
			</button> */}

			{/* Image */}
			<div className='aspect-square overflow-hidden'>
				<Image
					src={testImage}
					alt={`Producto ${id}`}
					width={300}
					height={300}
					className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300'
				/>
			</div>

			{/* Content */}
			<div className='p-4'>
				<div className='flex justify-between items-start'>
					<div>
						<h3 className='text-sm font-medium text-gray-900'>Bandolero</h3>
						<p className='mt-1 text-xs text-gray-500'>Grenobil</p>
					</div>
					<p className='text-lg font-bold text-gray-900'>10$</p>
				</div>

				<div className='mt-4'>
					<button className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
						<ShoppingCart className='mr-2 h-4 w-4' />
						Añadir al carrito
					</button>
				</div>
			</div>
		</div>
	);
}
