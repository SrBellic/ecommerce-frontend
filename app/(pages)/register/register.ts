'use server';

import api from '@/utils/api';
import { User } from '@/interfaces/interfaces';

type RegisterUser = Omit<User, 'id'> & {
	passwordConfirmation: string; //extensión de la interfaz User
};

async function Register(formData: FormData): Promise<void> {
	try {
		const user: RegisterUser = {
			name: formData.get('name') as string,
			lastName: formData.get('lastName') as string,
			cedula: `${formData.get('cedulaType')}${formData.get(
				'cedula'
			)}` as string,
			email: formData.get('email') as string,
			password: formData.get('password') as string,
			passwordConfirmation: formData.get('confirmPassword') as string,
			phone: formData.get('phone') as string | number,
			address: formData.get('address') as string,
		};

		const response = await api.post(`users/register`, user);

		if (response.status !== 200) {
			console.log(`Usuario Invalido. Error: ${response.status}`);
		}

		return;
	} catch (err: any) {
		if (err.response) {
			const { status, data } = err.response;

			if (status === 400) {
				console.log(data.error || 'Datos invalidos');
			} else {
				console.log(data.error || 'Error desconocido');
			}
		}
	}
}

export default Register;
