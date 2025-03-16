'use client';

import { useState } from 'react';
import './ShoppingKart.css';
import ShoppingKartIcon from '@/public/statics/SVG/shopping-cart.svg';

export default function ShoppingKart() {
	const [kart, setKart] = useState(0);

	const incrementKart = () => setKart((prev) => prev + 1);
	return (
		<div className='flex justify-center items-center relative'>
			<button
				className='bg-yellow-500 text-white rounded-full px-2 py-1.5 hover:px-1.5 hover:py-1 cursor-pointer hover:bg-white hover:text-yellow-500 hover:border-2 hover:border-yellow-500'
				onClick={incrementKart}
			>
				<ShoppingKartIcon
					width={28}
					height={28}
					className='inline-block'
				/>
				{kart != 0 ? <span className='badge'>{kart}</span> : null}
			</button>
		</div>
	);
}
