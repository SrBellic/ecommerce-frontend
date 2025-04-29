import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

const OpenSans = Open_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		template: '%s | Basic eCommerce',
		default: 'Basic eCommerce',
	},
	description: 'eCommerce de accesorios básicos de uso personal',
	authors: [
		{
			name: 'Diego Torres',
			url: 'https://github.com/SrBellic',
		},
		{
			url: 'https://x.com/BellicDev',
		},
		{
			url: 'srbellic.github.io/User-Card/',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${OpenSans.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
