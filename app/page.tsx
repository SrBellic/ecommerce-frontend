'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/features/Input/SearchBar';
import ShoppingKart from '@/components/features/Button/Shopping/ShoppingKart';
import Link from 'next/link';
import Card from '@/components/features/Product/Card/Card';
import GridCards from '@/components/layout/content/GridCards';

export default function Home() {
	const [kartCount, setKartCount] = useState(0);

	return (
		<main className='container mx-auto'>
			<div className='flex justify-evenly my-8'>
				<SearchBar />
				<ShoppingKart kart={kartCount} />
			</div>
			<div className='flex justify-around bg-zinc-200 py-4 rounded-lg'>
				<Link href={'#'}>Bandolero</Link>
				<Link href={'#'}>Billetera</Link>
				<Link href={'#'}>Cartera</Link>
				<Link href={'#'}>Morral</Link>
				<Link href={'#'}>Viajero</Link>
			</div>
			{/* <div className='flex justify-center my-5'>
				<Card />
			</div> */}
			<GridCards />
		</main>
	);
}
