'use server';

import api from '@/utils/api';
import { User } from '@/interfaces/interfaces';
import { redirect } from 'next/navigation';

type AuthUser = Pick<User, 'email' | 'password'>;

async function Auth(formData: FormData): Promise<void> {
	try {
		//Transformación de FormData a AuthUser
		const user: AuthUser = {
			email: formData.get('email') as string,
			password: formData.get('password') as string,
		};

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
