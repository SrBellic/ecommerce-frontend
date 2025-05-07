import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import { Product } from '@/interfaces/interfaces';
import { maxDescriptionLength } from '@/utils/utils';
// import { Badge } from '@/components/ui/badge';

interface ProductListItemProps {
	product: Product;
	viewMode: 'grid' | 'list';
}

export default function ProductList({
	product,
	viewMode,
}: ProductListItemProps) {
	const { id, name, brand, price, isNew, discount } = product;

	// Calcular precio con descuento si existe
	const discountedPrice = discount ? price - (price * discount) / 100 : price;

	if (viewMode === 'list') {
		return (
			<div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200'>
				<div className='flex flex-col sm:flex-row'>
					{/* Product Image */}
					<div className='relative w-full sm:w-48 h-48'>
						<Link href={`/producto/${id}`}>
							<Image
								src={`/placeholder.svg?height=200&width=200`}
								alt={name}
								width={200}
								height={200}
								className='w-full h-full object-cover object-center'
							/>
						</Link>
						{isNew && (
							<span className='absolute top-2 left-2 bg-indigo-600'>Nuevo</span>
						)}
					</div>

					{/* Product Info */}
					<div className='flex-1 p-4 flex flex-col'>
						<div className='flex-1'>
							<div className='flex justify-between'>
								<div>
									<Link
										href={`/producto/${id}`}
										className='text-sm text-gray-500 hover:text-indigo-600'
									>
										{brand}
									</Link>
									<h3 className='font-medium text-lg text-gray-900 mt-1'>
										<Link
											href={`/producto/${id}`}
											className='hover:text-indigo-600'
										>
											{name}
										</Link>
									</h3>
								</div>
								<div className='text-right'>
									{discount && (
										<div className='text-sm text-gray-500 line-through'>
											${price.toFixed(2)}
										</div>
									)}
									<div className='text-xl font-bold text-gray-900'>
										${discountedPrice.toFixed(2)}
									</div>
									{discount && (
										<span className='text-green-600 border-green-600'>
											{discount}% OFF
										</span>
									)}
								</div>
							</div>

							<p className='mt-2 text-sm text-gray-600 line-clamp-2'>
								{maxDescriptionLength(product.description, 40) ||
									'No hay descripción disponible.'}
							</p>
						</div>

						<div className='mt-4 flex items-center justify-between'>
							{product.stock > 0 ? (
								<div className='text-sm text-gray-500'>
									Disponible:{' '}
									<span className='text-green-600 font-medium'>En stock</span>
								</div>
							) : (
								<div className='text-sm text-red-500'>Agotado</div>
							)}

							<Button>
								<ShoppingCart
									size={20}
									strokeWidth={2.5}
								/>
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Grid view
	return (
		<div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200'>
			<div className='relative'>
				<Link href={`/producto/${id}`}>
					<Image
						src={`/placeholder.svg?height=200&width=200`}
						alt={name}
						width={200}
						height={200}
						className='w-full h-48 object-cover object-center'
					/>
				</Link>
				{isNew && (
					<span className='absolute top-2 left-2 bg-indigo-600'>Nuevo</span>
				)}
			</div>

			<div className='p-4'>
				<Link
					href={`/producto/${id}`}
					className='text-sm text-gray-500 hover:text-indigo-600'
				>
					{brand}
				</Link>
				<h3 className='font-medium text-gray-900 mt-1'>
					<Link
						href={`/products/${id}`}
						className='hover:text-indigo-600 line-clamp-1'
					>
						{name}
					</Link>
				</h3>

				<div className='mt-2 flex justify-between items-end'>
					<div>
						{discount && (
							<div className='text-sm text-gray-500 line-through'>
								${price.toFixed(2)}
							</div>
						)}
						<div className='text-lg font-bold text-gray-900'>
							${discountedPrice.toFixed(2)}
						</div>
					</div>
					{discount && (
						<span
							// variant='outline'
							className='text-green-600 border-green-600'
						>
							{discount}% OFF
						</span>
					)}
				</div>
				<div className='flex justify-center w-full'>
					<Button
						fullSize={true}
						text='Agregar al carrito'
						className='mt-4 py-3'
					>
						<ShoppingCart
							size={18}
							strokeWidth={2.5}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
}
