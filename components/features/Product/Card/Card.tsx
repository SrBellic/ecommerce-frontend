'use client';

import { useState } from 'react';
import Image from 'next/image';
import './Card.css';
import testImage from '@/public/statics/JPEG/TEST5.png';

export default function Card() {
	const [showMessage, setShowMessage] = useState(false);

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
					<span
						onMouseEnter={() => {
							setShowMessage(true);
						}}
						className='text-zinc-400 py-2 text-xs'
					>
						Código: C4141
					</span>
					<h3
						onMouseEnter={() => {
							setShowMessage(true);
						}}
					>
						Bandolero deportivo femenino
					</h3>
					<span
						onMouseEnter={() => {
							setShowMessage(true);
						}}
						className='text-xl py-2'
					>
						10$
					</span>
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
