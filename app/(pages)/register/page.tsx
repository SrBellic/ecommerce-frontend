'use client';

import Form from 'next/form';
import Link from 'next/link';
import Register from './register';
import { redirect } from 'next/navigation';

export default function Page() {
	const InputDetails = [
		{ name: 'name', placeholder: 'Nombre' },
		{ name: 'lastName', placeholder: 'Apellido' },
		{ name: 'cedula', placeholder: 'Cédula' },
		{ name: 'email', placeholder: 'Correo Electrónico' },
		{ name: 'phone', placeholder: 'Teléfono' },
		{ name: 'password', placeholder: 'Contraseña' },
		{ name: 'address', placeholder: 'Dirección' },
	];

	return (
		<main>
			<div className='flex justify-center h-full'>
				<div className='bg-gray-200 max-w-1/2 p-5 rounded-md shadow-md shadow-gray-300'>
					<Form
						action={Register}
						className='flex flex-col gap-y-2'
					>
						<div className='flex flex-wrap gap-x-4 gap-y-2.5 mb-2'>
							{InputDetails.map((input, index) => (
								<input
									key={index}
									className='bg-white rounded px-1.5 py-1 focus:outline-indigo-400 flex-1 min-w-[calc(50%-0.5rem)]'
									type='text'
									name={input.name}
									placeholder={input.placeholder}
								/>
							))}
						</div>
						<button
							type='submit'
							onClick={() => redirect('/login')}
							className='bg-indigo-400 rounded-md shadow-md shadow-indigo-500 text-white py-1.5 cursor-pointer outline-2 outline-indigo-400 hover:bg-white hover:text-indigo-400 focus:outline-white transition'
						>
							Registrar
						</button>
					</Form>
					<div className='flex flex-col mt-3'>
						<small>
							¿Ya tienes cuenta? Haz click{' '}
							<Link
								href={`/login`}
								className='text-indigo-500 hover:underline'
							>
								aquí
							</Link>
						</small>
						<hr className='my-4 text-gray-300' />
						<small>
							<Link
								href={`/`}
								className='text-indigo-500 hover:underline'
							>
								Volver al inicio
							</Link>
						</small>
					</div>
				</div>
			</div>
		</main>
	);
}
