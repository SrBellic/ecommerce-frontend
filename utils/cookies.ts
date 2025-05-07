'use server';

import { cookies } from 'next/headers';

export async function getCookie(cookie: string) {
	const cookieStore = await cookies();
	const getCookie = cookieStore.get(cookie);

	console.log(getCookie);
}
