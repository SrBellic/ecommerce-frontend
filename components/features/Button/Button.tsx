import { ReactNode } from 'react';

export default function Button({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<button className='bg-yellow-500 text-white rounded-full px-2 py-1.5 cursor-pointer hover:bg-white hover:text-yellow-500 hover:outline-2 hover:outline-yellow-500'>
				<span>{children}</span>
			</button>
		</>
	);
}
