'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/features/Product/Card/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Carousel() {
	const [curr, setCurr] = useState(0);
	const [visibleItems, setVisibleItems] = useState(4);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setVisibleItems(1);
			} else if (window.innerWidth < 768) {
				setVisibleItems(2);
			} else if (window.innerWidth < 1024) {
				setVisibleItems(3);
			} else {
				setVisibleItems(4);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const prev = () => {
		setCurr((curr) => (curr === 0 ? 0 : curr - 1));
	};

	const next = () => {
		setCurr((curr) =>
			curr === slides.length - visibleItems ? curr : curr + 1
		);
	};

	return (
		<div className='relative'>
			<div className='overflow-hidden'>
				<div
					className='flex transition-transform duration-300 ease-out'
					style={{ transform: `translateX(-${curr * (100 / visibleItems)}%)` }}
				>
					{slides.map((id) => (
						<div
							key={id}
							className='flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2'
						>
							<Card id={id} />
						</div>
					))}
				</div>
			</div>

			<button
				className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-indigo-50 focus:outline-none ${
					curr === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
				}`}
				onClick={prev}
				disabled={curr === 0}
			>
				<ChevronLeft className='h-6 w-6 text-indigo-600' />
			</button>

			<button
				className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-indigo-50 focus:outline-none ${
					curr === slides.length - visibleItems
						? 'opacity-50 cursor-not-allowed'
						: 'opacity-100'
				}`}
				onClick={next}
				disabled={curr === slides.length - visibleItems}
			>
				<ChevronRight className='h-6 w-6 text-indigo-600' />
			</button>
		</div>
	);
}
