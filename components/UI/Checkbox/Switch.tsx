export default function Switch() {
	return (
		<>
			<label className='relative inline-flex items-center cursor-pointer'>
				<input
					type='checkbox'
					className='sr-only peer'
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-5 peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-gray-400 after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
			</label>
		</>
	);
}
