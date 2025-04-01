import Link from 'next/link';

export default function Page() {
	return (
		<main className='flex justify-center h-full'>
			<div className='bg-gray-200 w-max p-5 rounded-md'>
				<form
					action=''
					method='POST'
					className='flex flex-col gap-y-2.5 mb-2'
				>
					<input
						className='bg-white rounded px-1.5 py-1 focus:outline-indigo-400'
						type='email'
						name='email'
						placeholder='Correo Electrónico'
					/>
					<input
						className='bg-white rounded px-1.5 py-1 focus:outline-indigo-400'
						type='password'
						name='password'
						placeholder='Contraseña'
					/>
				</form>
				<div className='flex flex-col'>
					<small>
						<Link
							href={`#`}
							className='hover:text-indigo-600 hover:underline'
						>
							Crear usuario
						</Link>
					</small>
					<small>
						¿Olvidaste tu contraseña? Haz click{' '}
						<Link
							href={`#`}
							className='text-indigo-500 hover:underline'
						>
							aquí
						</Link>
					</small>
				</div>
			</div>
		</main>
	);
}
