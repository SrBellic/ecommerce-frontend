'use client';

import { useState, useEffect } from 'react';
import fetchProduct from '../fetchProduct';
import Image from 'next/image';
import './Card.css';
import testImage from '@/public/statics/JPEG/TEST5.png';

import { Product } from '@/interfaces/interfaces';

export default function Card() {
	const [showMessage, setShowMessage] = useState(false);
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		async function fetchProductData() {
			const data = await fetchProduct(1); // ID del producto que deseas obtener
			setProduct(data); // Actualiza el estado con los datos obtenidos
		}

		fetchProductData();
	}, []);

	return (
		<>
			<article
				className='flex flex-col justify-center items-center outline-1 outline-zinc-200 rounded-md cursor-pointer'
				onMouseEnter={() => {
					setShowMessage(true);
				}}
				onMouseOut={() => {
					setShowMessage(false);
				}}
			>
				<Image
					src={testImage}
					alt='prueba'
					width={250}
					height={250}
					className='blur-card'
					onMouseEnter={() => {
						setShowMessage(true);
					}}
				/>
				<div
					className='flex flex-col ms-4 w-full rounded-b-md'
					onMouseEnter={() => {
						setShowMessage(true);
					}}
				>
					<span className='text-zinc-400 py-2 text-xs'>
						ID: {product?.id ?? 'Cargando...'}
					</span>
					<h3>{product?.name ?? 'Cargando...'}</h3>
					<span className='text-sm text-gray-500'>{product?.marca ?? ''}</span>
					<span className='text-xl py-2'>10$</span>
				</div>
				{showMessage ? (
					<div
						className='absolute outline-2 outline-white bg-yellow-400 rounded-full px-2 text-white font-bold'
						onMouseEnter={() => {
							setShowMessage(true);
						}}
					>
						<p>Comprar</p>
					</div>
				) : null}
			</article>
		</>
	);
}
