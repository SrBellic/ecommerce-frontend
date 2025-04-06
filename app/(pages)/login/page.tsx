'use client';

import Link from 'next/link';
import Form from 'next/form';
import Auth from './auth';
import { redirect } from 'next/navigation';

export default function Page() {
	const INPUT_DETAILS = [
		{ name: 'email', placeholder: 'Correo Electrónico' },
		{ name: 'edad', placeholder: 'Contraseña' },
	];

	return (
		<main className='flex justify-center h-full'>
			<div className='bg-gray-200 w-max p-5 rounded-md shadow-md shadow-gray-300'>
				<Form
					action={Auth}
					className='flex flex-col gap-y-2.5 mb-2'
				>
					{INPUT_DETAILS.map((input, index) => (
						<input
							key={index}
							className='bg-white rounded px-1.5 py-1 focus:outline-indigo-400'
							type='text'
							name={input.name}
							placeholder={input.placeholder}
						/>
					))}
					<button
						type='submit'
						onClick={() => redirect('/')}
						className='bg-indigo-400 rounded-md shadow-md shadow-indigo-500 text-white py-1.5 cursor-pointer outline-2 outline-indigo-400 hover:bg-white hover:text-indigo-400 focus:outline-white transition'
					>
						Ingresar
					</button>
				</Form>
				<div className='flex flex-col'>
					<small>
						<Link
							href={`/register`}
							className='text-indigo-600 hover:underline'
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
					<hr className='my-4 text-gray-300' />
					<small className='text-center'>
						<Link
							href={`/`}
							className='text-indigo-500 hover:underline'
						>
							Volver al inicio
						</Link>
					</small>
				</div>
			</div>
		</main>
	);
}
