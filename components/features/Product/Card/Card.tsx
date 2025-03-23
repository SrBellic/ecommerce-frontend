'use client';

import { useState, useEffect } from 'react';
import fetchProduct from '../fetchProduct';
import Image from 'next/image';
import './Card.css';
import Button from '../../Button/Button';
import ShoppingKartIcon from '@/public/statics/SVG/shopping-cart.svg';
import testImage from '@/public/statics/JPEG/TEST5.png';

import { Product } from '@/interfaces/interfaces';

export default function Card() {
	const [showButton, setShowButton] = useState(false);
	// const [product, setProduct] = useState<Product | null>(null);

	// useEffect(() => {
	// 	async function fetchProductData() {
	// 		const data = await fetchProduct(1); // ID del producto que deseas obtener
	// 		setProduct(data); // Actualiza el estado con los datos obtenidos
	// 	}

	// 	fetchProductData();
	// }, []);

	return (
		<>
			<article
				className='w-full sm:w-max px-3 pb-4 flex flex-col justify-center items-center rounded-md cursor-pointer hover:shadow-2xl relative'
				onMouseEnter={() => setShowButton(true)}
				onMouseLeave={() => setShowButton(false)}
			>
				<Image
					src={testImage}
					alt='prueba'
					width={250}
					height={250}
					className='blur-card'
				/>
				<div className='flex flex-col w-full rounded-b-md px-5'>
					<span className='text-zinc-400 py-2 text-xs'>
						ID: 12345 {/*product?.id ?? 'Cargando...'*/}
					</span>
					<h3>Bandolero{/*product?.name ?? 'Cargando...'*/}</h3>
					<span className='text-sm text-gray-500'>
						Grenobil{/*product?.marca ?? ''*/}
					</span>
					<span className='text-xl py-2 text-right'>10$</span>
				</div>
				<div className={`invisible ${showButton ? 'visible' : null}`}>
					<Button text='Agregar al carrito'>
						<ShoppingKartIcon
							width={28}
							height={28}
							className='inline-block'
						/>
					</Button>
				</div>
			</article>
		</>
	);
}
