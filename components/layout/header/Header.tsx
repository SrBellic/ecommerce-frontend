import SendIcon from '@/public/statics/SVG/send.svg';
import WhatsappIcon from '@/public/statics/SVG/whatsapp.svg';
import AvatarIcon from '@/public/statics/SVG/avatar.svg';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='bg-zinc-200 mb-5 px-24 py-2 sm:flex sm:justify-between sm:items-center sm:sticky hidden sm:visible'>
			<div className='flex justify-start'>
				<Link
					href='#'
					className='mx-3 hover:text-green-400 transition-color duration-250 ease-in-out'
				>
					Contáctanos
					<span>
						<WhatsappIcon
							width={18}
							height={18}
							className='inline-block mx-2 '
						/>
					</span>
				</Link>
				<Link
					href='#'
					className='mx-3 hover:text-blue-400 transition-color duration-250 ease-in-out'
				>
					Envíos
					<span>
						<SendIcon
							width={18}
							height={18}
							className='inline-block mx-2'
						/>
					</span>
				</Link>
			</div>
			<div className='flex justify-center'>
				<Link
					href='#'
					className='text-lg'
				>
					Usuario
					<span>
						<AvatarIcon
							width={18}
							height={18}
							className='inline-block mx-2'
						/>
					</span>
				</Link>
			</div>
		</header>
	);
}
