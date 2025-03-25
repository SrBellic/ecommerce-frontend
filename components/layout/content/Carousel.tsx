'use client';

import { useState } from 'react';
import Card from '@/components/features/Product/Card/Card';
import ChevronRightIcon from '@/public/statics/SVG/chevron-right.svg';
import ChevronLeftIcon from '@/public/statics/SVG/chevron-left.svg';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Carousel() {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	return (
		<>
			<div className='flex justify-around items-center'>
				<button
					className='hidden sm:flex cursor-pointer h-full rounded-full text-white bg-yellow-400 hover:bg-white hover:text-yellow-400'
					onClick={prev}
				>
					<span>
						<ChevronLeftIcon
							width={32}
							height={32}
						/>
					</span>
				</button>
				<div className='flex overflow-hidden'>
					{slides.map((id, index) => (
						<div
							key={id}
							className={`transition-transform transform ${
								index === curr ? 'translate-x-0' : 'translate-x-full'
							}`}
						>
							<Card id={id} />
						</div>
					))}
				</div>
				<button
					className='hidden sm:flex cursor-pointer h-full rounded-full text-white bg-yellow-400 hover:bg-white hover:text-yellow-400'
					onClick={next}
				>
					<span>
						<ChevronRightIcon
							width={32}
							height={32}
						/>
					</span>
				</button>
			</div>
		</>
	);
}
