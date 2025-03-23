import Card from '@/components/features/Product/Card/Card';
import ChevronRightIcon from '@/public/statics/SVG/chevron-right.svg';
import ChevronLeftIcon from '@/public/statics/SVG/chevron-left.svg';

export default function GridCards() {
	return (
		<div className='grid justify-items-center sm:flex gap-4 py-8'>
			<button className='hidden sm:flex cursor-pointer h-full rounded-full text-white bg-yellow-400 hover:bg-white hover:text-yellow-400'>
				<span>
					<ChevronRightIcon
						width={28}
						height={28}
					/>
				</span>
			</button>
			<button className='hidden sm:flex cursor-pointer h-full rounded-full text-white bg-yellow-400 hover:bg-white hover:text-yellow-400'>
				<span>
					<ChevronLeftIcon
						width={28}
						height={28}
					/>
				</span>
			</button>
			<Card key={1} />
			<Card key={2} />
			<Card key={3} />
			<Card key={4} />
			<Card key={5} />
			<Card key={6} />
		</div>
	);
}
