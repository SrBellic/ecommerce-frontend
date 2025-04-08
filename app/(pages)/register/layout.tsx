import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Registro',
	description: 'Página de registro de usuario',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
