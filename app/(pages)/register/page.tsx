'use client';

import { useState } from 'react';
import Form from 'next/form';
import Link from 'next/link';
import Register from './register';
import { redirect } from 'next/navigation';
import { ERROR_MESSAGE, TEXT_RESTRICTION } from '@/utils/constants';

export default function Page() {
	// Constantes para cada fila del formulario
	const FIRST_ROW_INPUTS = [
		{ name: 'name', placeholder: 'Nombre', type: 'text' },
		{ name: 'lastName', placeholder: 'Apellido', type: 'text' },
	];

	const SECOND_ROW_INPUT = [
		{
			name: 'email',
			placeholder: 'Correo Electrónico',
			type: 'email',
			isFullWidth: true,
		},
	];

	const THIRD_ROW_INPUTS = [
		{
			name: 'password',
			placeholder: 'Contraseña',
			type: 'password',
		},
		{
			name: 'confirmPassword',
			placeholder: 'Confirmar Contraseña',
			type: 'password',
		},
	];

	const FOURTH_ROW_INPUT = [
		{ name: 'phone', placeholder: 'Teléfono', type: 'text' },
	];

	const FIFTH_ROW_INPUT = [
		{
			name: 'address',
			placeholder: 'Dirección',
			type: 'text',
			isFullWidth: true,
			isTextarea: true,
		},
	];

	return (
		<main className='flex justify-center items-center max-h-screen p-3 sm:p-0 bg-gray-50'>
			<div className='w-full max-w-lg bg-white rounded-lg shadow-lg p-6'>
				<h1 className='text-2xl font-bold text-gray-900 mb-2'>Registro</h1>
				<p className='text-gray-500 mb-6 hidden sm:block'>
					Por favor complete todos los campos para crear su cuenta.
				</p>
				<Form
					action={Register}
					className='space-y-4'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{FIRST_ROW_INPUTS.map((input, index) => (
							<div
								key={index}
								className='space-y-2'
							>
								<label htmlFor={input.name}>{input.placeholder}</label>
								<input
									type={input.type}
									name={input.name}
									placeholder={`Ingrese su ${input.placeholder.toLowerCase()}`}
									className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
								/>
							</div>
						))}
						{SECOND_ROW_INPUT.map((input, index) => (
							<div
								key={index}
								className={`space-y-2 ${
									input.isFullWidth ? 'md:col-span-2' : ''
								}`}
							>
								<label htmlFor={input.name}>{input.placeholder}</label>
								<input
									type={input.type}
									name={input.name}
									placeholder='correo@ejemplo.com'
									className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
								/>
							</div>
						))}
						{THIRD_ROW_INPUTS.map((input, index) => (
							<div
								key={index}
								className='space-y-2'
							>
								<label htmlFor={input.name}>{input.placeholder}</label>
								<input
									type={input.type}
									name={input.name}
									placeholder='********'
									className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
								/>
							</div>
						))}
						<div className='space-y-2'>
							<label htmlFor='cedulaType'>Cédula</label>
							<div className='flex'>
								<select
									name='cedulaType'
									className='px-1 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
								>
									<option value='V-'>V-</option>
									<option value='E-'>E-</option>
								</select>
								<input
									type='text'
									name='cedula'
									placeholder='Número de Cédula'
									className='flex-1 w-full px-1 py-2 bg-white border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent border-l-0'
								/>
							</div>
						</div>
						{FOURTH_ROW_INPUT.map((input, index) => (
							<div
								key={index}
								className='space-y-2'
							>
								<label htmlFor={input.name}>{input.placeholder}</label>
								<input
									type={input.type}
									name={input.name}
									placeholder={`Ingrese su ${input.placeholder.toLowerCase()}`}
									className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
								/>
							</div>
						))}
						{FIFTH_ROW_INPUT.map((input, index) => (
							<div
								key={index}
								className={`space-y-2 ${
									input.isFullWidth ? 'md:col-span-2' : ''
								}`}
							>
								<label htmlFor={input.name}>{input.placeholder}</label>
								{input.isTextarea ? (
									<textarea
										name={input.name}
										placeholder='Ingrese su dirección completa'
										className='w-full min-h-[80px] max-h-[100px] px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
									/>
								) : (
									<input
										type={input.type}
										name={input.name}
										placeholder={`Ingrese su ${input.placeholder.toLowerCase()}`}
										className='w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent'
									/>
								)}
							</div>
						))}
					</div>
					<button
						type='submit'
						onClick={() => redirect('/login')}
						className='w-full cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md shadow-indigo-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition-colors'
					>
						Registrarse
					</button>
				</Form>
				<div className='mt-6 space-y-4'>
					<div className='text-sm text-gray-600'>
						¿Ya tienes cuenta?
						<Link
							href={`/login`}
							className='ml-1 text-indigo-500 hover:text-indigo-600 hover:underline'
						>
							Iniciar sesión
						</Link>
					</div>
					<hr className='border-gray-200' />
					<div className='text-sm text-gray-600'>
						<Link
							href={`/`}
							className='text-indigo-500 hover:text-indigo-600 hover:underline'
						>
							Volver al inicio
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
