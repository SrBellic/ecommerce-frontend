'use client';

import { useState } from 'react';
import './ShoppingKart.css';
import ShoppingKartIcon from '@/public/statics/SVG/shopping-cart.svg';

export default function ShoppingKart({
	kart,
}: Readonly<{
	kart: number;
}>) {
	return (
		<>
			<div className='flex justify-center items-center relative'>
				<button className='transition shadow-md shadow-indigo-500 bg-indigo-500 text-white rounded-full px-2 py-1.5 cursor-pointer hover:bg-white hover:text-indigo-500 hover:outline-2 hover:outline-indigo-500'>
					<ShoppingKartIcon
						width={28}
						height={28}
						className='inline-block'
					/>
					{kart != 0 ? <span className='badge'>{kart}</span> : null}
				</button>
			</div>
		</>
	);
}
