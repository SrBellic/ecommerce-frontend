'use client';

import './ShoppingKart.css';
import { ShoppingCart } from 'lucide-react';

export default function ShoppingKart({
	kart,
}: Readonly<{
	kart: number;
}>) {
	return (
		<div className='relative'>
			<button className='flex items-center justify-center p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'>
				<ShoppingCart className='h-5 w-5' />
				{kart > 0 && (
					<span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
						{kart}
					</span>
				)}
			</button>
		</div>
	);
}
