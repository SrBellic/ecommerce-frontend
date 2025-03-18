import SearchIcon from '@/public/statics/SVG/search.svg';

export function SearchBar() {
	return (
		<div className='flex justify-center items-center'>
			<input
				type='text'
				placeholder='Buscar...'
				className='outline-2 outline-zinc-400 rounded-md rounded-r-none px-2 py-1  focus:outline-yellow-500'
			/>
			<button className='transition outline-2 outline-yellow-500 bg-yellow-500 text-white rounded-md rounded-l-none px-2 py-1 hover:cursor-pointer hover:bg-white hover:text-yellow-500'>
				<span>
					<SearchIcon
						width={22}
						height={22}
						className='inline-block'
					/>
				</span>
			</button>
		</div>
	);
}
