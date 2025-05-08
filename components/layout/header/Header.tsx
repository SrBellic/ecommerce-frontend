import { MessageSquare, Send, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='bg-white shadow-sm'>
			{/* Top bar */}
			<div className='bg-gray-50 border-b border-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-10'>
						<div className='flex items-center space-x-4'>
							<Link
								href='#'
								className='text-sm text-gray-600 hover:text-green-600 transition-colors flex items-center'
							>
								<MessageSquare className='w-4 h-4 mr-1' />
								<span>Contáctanos</span>
							</Link>
							<Link
								href='#'
								className='text-sm text-gray-600 hover:text-indigo-600 transition-colors flex items-center'
							>
								<Send className='w-4 h-4 mr-1' />
								<span>Envíos</span>
							</Link>
						</div>
						<div>
							<Link
								href='/login'
								className='text-sm text-gray-600 hover:text-indigo-600 transition-colors flex items-center'
							>
								<span>Inicia Sesión</span>
								<User className='w-4 h-4 ml-1' />
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Main header */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					<div>
						<Link
							href='/'
							className='flex items-center'
						>
							<span className='text-2xl font-bold text-indigo-600'>Basic</span>
							<span className='text-2xl font-bold text-gray-900'>
								eCommerce
							</span>
						</Link>
					</div>
					{/* <nav className='hidden md:flex space-x-8'>
						<Link
							href='#'
							className='text-gray-600 hover:text-indigo-600 transition-colors'
						>
							Novedades
						</Link>
						<Link
							href='#'
							className='text-gray-600 hover:text-indigo-600 transition-colors'
						>
							Ofertas
						</Link>
						<Link
							href='#'
							className='text-gray-600 hover:text-indigo-600 transition-colors'
						>
							Colecciones
						</Link>
						<Link
							href='#'
							className='text-gray-600 hover:text-indigo-600 transition-colors'
						>
							Nosotros
						</Link>
					</nav> */}
				</div>
			</div>
		</header>
	);
}
