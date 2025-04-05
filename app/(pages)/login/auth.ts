'use server';

import api from '@/utils/api';
import { User } from '@/interfaces/interfaces';
import { redirect } from 'next/navigation';

type AuthUser = Pick<User, 'email' | 'edad'>;

async function Auth(formData: FormData): Promise<void> {
	try {
		//Transformación de FormData a AuthUser
		const user: AuthUser = {
			email: formData.get('email') as string,
			edad: Number(formData.get('edad')),
		};

		//Validación temporal que valida que los datos se encuentren en la BBDD
		if (!user.email || isNaN(user.edad)) {
			throw new Error('Datos inválidos');
		}

		const response = await api.post(`users/login`, user);

		if (response.status !== 200) {
			throw new Error('Usuario inválido');
		}

		return redirect('/');
	} catch (err: any) {
		// Manejo de errores
		if (err.response) {
			const { status, data } = err.response;

			if (status === 404) {
				console.log(data.error || 'Usuario inexistente');
			} else {
				console.log(data.error || 'Error desconocido');
			}
		}
	}
}

export default Auth;
