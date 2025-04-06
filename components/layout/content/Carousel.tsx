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
					className={`${slides[curr] === 1 ? 'invisible' : 'sm:flex'}
						 cursor-pointer h-full rounded-full text-white bg-indigo-500 hover:bg-white hover:text-indigo-500`}
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
					{slides.slice(curr, curr + 4).map((id) => (
						<Card
							key={id}
							id={id}
						/>
					))}
				</div>
				<button
					className={` ${
						slides[curr] <= 4 ? 'sm:flex' : 'invisible'
					}  cursor-pointer h-full rounded-full text-white bg-indigo-500 hover:bg-white hover:text-indigo-500`}
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
