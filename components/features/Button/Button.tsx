import { ReactNode } from 'react';

export default function Button({
	text,
	children,
	onPress,
}: Readonly<{
	text?: string;
	children: React.ReactNode;
	onPress?: () => void;
}>) {
	return (
		<>
			<button
				onClick={onPress}
				className='bg-yellow-500 text-white rounded-md px-2 py-1.5 cursor-pointer hover:bg-white hover:text-yellow-500 hover:outline-2 hover:outline-yellow-500 flex'
			>
				<span className='mx-2'>{text}</span>
				<span>{children}</span>
			</button>
		</>
	);
}
