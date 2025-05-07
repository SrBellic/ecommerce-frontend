'use client';

import Link from 'next/link';
import Form from 'next/form';
import UserIcon from '@/public/statics/SVG/user.svg';
import LockIcon from '@/public/statics/SVG/lock.svg';
import Auth from './auth';

export default function Page() {
	const INPUT_DETAILS = [
		{
			name: 'email',
			placeholder: 'Correo Electrónico',
			type: 'email',
			icon: <UserIcon className='h-4 w-4 text-gray-500' />,
		},
		{
			name: 'password',
			placeholder: 'Contraseña',
			type: 'password',
			icon: <LockIcon className='h-4 w-4 text-gray-500' />,
		},
	];

	return (
		<main className='flex max-h-screen items-center justify-center bg-gray-50 sm:px-6 lg:px-8'>
			<div className='w-full max-w-md space-y-6'>
				<div className='text-center'>
					<h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
						Iniciar Sesión
					</h2>
					<p className='mt-2 text-sm text-gray-600'>
						Ingresa tus credenciales para acceder
					</p>
				</div>
				<div className='bg-white rounded-lg shadow-lg p-6 sm:p-8'>
					<Form
						action={Auth}
						className='flex flex-col gap-y-4 mb-4'
					>
						{INPUT_DETAILS.map((input, index) => (
							<div
								key={index}
								className='relative'
							>
								<div className='absolute inset-y-0 left-0 flex items-center pl-3'>
									{input.icon}
								</div>
								<input
									className='w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400'
									type={input.type}
									name={input.name}
									placeholder={input.placeholder}
									required
								/>
							</div>
						))}
						<button
							type='submit'
							className='w-full rounded-md bg-indigo-500 py-2.5 px-4 text-md font-medium text-white shadow-md shadow-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-colors cursor-pointer'
						>
							Ingresar
						</button>
					</Form>

					<div className='space-y-3 text-sm'>
						<div className='flex justify-between'>
							<Link
								href={`/register`}
								className='font-medium text-indigo-600 hover:text-indigo-500 hover:underline'
							>
								Crear usuario
							</Link>
							<Link
								href={`#`}
								className='font-medium text-indigo-600 hover:text-indigo-500 hover:underline'
							>
								¿Olvidaste tu contraseña?
							</Link>
						</div>

						<div className='relative my-4'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300'></div>
							</div>
							<div className='relative flex justify-center text-xs'>
								<span className='bg-white px-2 text-gray-500'>o</span>
							</div>
						</div>

						<div className='text-center'>
							<Link
								href={`/`}
								className='font-medium text-indigo-600 hover:text-indigo-500 hover:underline'
							>
								Volver al inicio
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
