import { ReactNode } from 'react';

export default function Button({
	text,
	children,
	className,
	fullSize,
	onPress,
}: Readonly<{
	text?: string;
	children: React.ReactNode;
	className?: string;
	fullSize?: boolean;
	onPress?: () => void;
}>) {
	return (
		<>
			<button
				onClick={onPress}
				className={`${className} ${text ? `px-2` : `px-3`} w-${
					fullSize ? `full` : `max`
				} cursor-pointer flex justify-center py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
			>
				<span>{children}</span>
				{text && <span className='mx-2'>{text}</span>}
			</button>
		</>
	);
}
