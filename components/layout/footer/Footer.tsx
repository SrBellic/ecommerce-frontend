export default function Footer() {
	return (
		<footer className='bg-white border-t border-gray-200 mt-16'>
			<div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
				<div className='md:flex md:items-center md:justify-between'>
					<div className='flex justify-center md:justify-start'>
						<span className='text-xl font-bold text-indigo-600'>Basic</span>
						<span className='text-xl font-bold text-gray-900'>eCommerce</span>
					</div>
					<div className='mt-8 md:mt-0'>
						<p className='text-center text-sm text-gray-500'>
							&copy; {new Date().getFullYear()} Basic eCommerce. Todos los
							derechos reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
