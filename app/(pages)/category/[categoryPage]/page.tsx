'use client';

import { useState, useEffect } from 'react';
import { fetchProductList } from '@/components/features/Product/fetchProduct';
import type { Product } from '@/interfaces/interfaces';
import { SearchBar } from '@/components/features/Input/SearchBar';
import ProductList from '@/components/features/Product/ProductList/ProductList';
import {
	ChevronDown,
	SlidersHorizontal,
	ChevronLeft,
	ChevronRight,
	X,
	Loader2,
	Menu,
	LayoutGrid,
} from 'lucide-react';
import { Checkbox } from '@/components/UI/Checkbox/Checkbox';
import Button from '@/components/UI/Button/Button';

export default function Page({
	params,
}: {
	params: Promise<{ categoryPage: string }>;
}) {
	// Estado para almacenar el nombre de la categoría.
	const [categoryPage, setCategoryPage] = useState<string | null>(null);

	// Estado para almacenar la lista de productos.
	const [productList, setProductList] = useState<Product[] | null>(null);

	// Estado para manejar el indicador de carga.
	const [loading, setLoading] = useState(true);

	// Estados adicionales para la UI
	//const [priceRange, setPriceRange] = useState([0, 100]); //Posible descarte
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
	const [sortBy, setSortBy] = useState('relevance');
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	// Detectar si es dispositivo móvil
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);

		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);

	// Cerrar el panel de filtros cuando se cambia a desktop
	useEffect(() => {
		if (!isMobile) {
			setIsFilterOpen(false);
		}
	}, [isMobile]);

	// Efecto para resolver la promesa `params` y obtener el valor de `categoryPage`
	useEffect(() => {
		const fetchParams = async () => {
			const resolvedParams = await params;
			setCategoryPage(resolvedParams.categoryPage);
		};

		fetchParams();
	}, [params]);

	// Efecto para obtener la lista de productos cuando `categoryPage` está disponible
	useEffect(() => {
		if (!categoryPage) return;

		const fetchData = async () => {
			try {
				setLoading(true);
				const products = await fetchProductList(categoryPage);
				setProductList(products);
			} catch (error) {
				console.error('Error fetching product list:', error);
				setProductList(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [categoryPage]);

	// Función para alternar la visibilidad del panel de filtros
	const toggleFilters = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	// Componente de filtros
	const FiltersPanel = () => (
		<div className='bg-white rounded-lg shadow-sm p-5'>
			<div className='flex justify-between items-center mb-6'>
				<h3 className='text-lg font-medium text-gray-900 flex items-center'>
					<SlidersHorizontal className='w-5 h-5 mr-2' />
					Filtros
				</h3>
				{isMobile && (
					<button
						onClick={toggleFilters}
						className='p-1 rounded-full hover:bg-gray-100'
					>
						<X className='w-5 h-5' />
					</button>
				)}
			</div>
			<button className='text-sm text-indigo-600 hover:text-indigo-800 mb-4'>
				Limpiar filtros
			</button>

			{/* Price Range */}
			<div className='flex justify-around gap-x-3 mb-3 w-full max-w-[100%]'>
				<input
					className='outline-1 outline-gray-400 rounded-sm px-2 w-full focus:outline-2 focus:outline-indigo-400'
					type='text'
					placeholder='Mínimo'
				/>
				<span>-</span>
				<input
					className='outline-1 outline-gray-400 rounded-sm px-2 w-full focus:outline-2 focus:outline-indigo-400'
					type='text'
					placeholder='Máximo'
				/>
			</div>

			{/* Categories */}
			<div className='border-t border-gray-200 py-4'>
				<h4 className='font-medium text-gray-900 mb-3'>Categorías</h4>
				<div className='space-y-2'>
					{['Bandolero', 'Billetera', 'Cartera', 'Morral', 'Viajero'].map(
						(category) => (
							<div
								key={category}
								className='flex items-center'
							>
								<Checkbox
									id={`category-${category}`}
									label={category}
									checked={isChecked}
									onChange={setIsChecked}
								/>
							</div>
						)
					)}
				</div>
			</div>

			{/* Brands */}
			<div className='border-t border-gray-200 py-4'>
				<h4 className='font-medium text-gray-900 mb-3'>Marcas</h4>
				<div className='space-y-2'>
					{['Grenobil', 'Traveler', 'Urban', 'Outdoor', 'Classic'].map(
						(brand) => (
							<div
								key={brand}
								className='flex items-center'
							>
								<Checkbox
									id={`brand-${brand}`}
									label={brand}
									checked={isChecked}
									onChange={setIsChecked}
								/>
							</div>
						)
					)}
				</div>
			</div>

			{isMobile && (
				<div className='mt-6 border-t border-gray-200 pt-6'>
					<Button
						className='w-full'
						onPress={toggleFilters}
					>
						Ver resultados
					</Button>
				</div>
			)}
		</div>
	);

	return (
		<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			{/* Breadcrumbs */}
			<nav className='flex mb-6 text-sm text-gray-500'>
				<a
					href='/'
					className='hover:text-indigo-600'
				>
					Inicio
				</a>
				<span className='mx-2'>/</span>
				<span className='text-gray-900'>{categoryPage}</span>
			</nav>

			{/* Mobile Filter Overlay */}
			{isMobile && isFilterOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40'
					onClick={toggleFilters}
				/>
			)}

			{/* Mobile Filter Drawer */}
			{isMobile && (
				<div
					className={`fixed inset-y-0 left-0 w-80 max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
						isFilterOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					<div className='p-4'>
						<FiltersPanel />
					</div>
				</div>
			)}

			<div className='flex flex-col md:flex-row gap-8'>
				{/* Sidebar filters - Desktop only */}
				{!isMobile && (
					<div className='w-64 flex-shrink-0 sticky top-4 self-start'>
						<FiltersPanel />
					</div>
				)}

				{/* Main content */}
				<div className='flex-1'>
					{/* Filter button and search - Mobile */}
					{isMobile && (
						<div className='bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center gap-2'>
							<Button
								className='flex items-center gap-2'
								onPress={toggleFilters}
							>
								<SlidersHorizontal
									size={20}
									strokeWidth={2.8}
								/>
							</Button>
							<div className='flex-1'>
								<SearchBar />
							</div>
						</div>
					)}

					{/* Search and results info - Desktop */}
					{!isMobile && (
						<div className='bg-white rounded-lg shadow-sm p-4 mb-6'>
							<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
								<SearchBar />
								{!loading && productList && (
									<div className='text-sm text-gray-500'>
										Mostrando{' '}
										<span className='font-medium text-gray-900'>
											{productList.length}
										</span>{' '}
										resultados
									</div>
								)}
							</div>
						</div>
					)}

					{/* Sort and view options */}
					<div className='bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center'>
						<div className='flex items-center mb-4 sm:mb-0'>
							<span className='text-sm text-gray-700 mr-2'>Ordenar por:</span>
							<div className='relative'>
								<select
									className='appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-8'
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
								>
									<option value='relevance'>Relevancia</option>
									<option value='price_asc'>Precio: menor a mayor</option>
									<option value='price_desc'>Precio: mayor a menor</option>
									<option value='newest'>Más recientes</option>
								</select>
								<ChevronDown className='absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500' />
							</div>
						</div>
						<div className='flex items-center space-x-2'>
							<button
								className={`p-2 rounded-md cursor-pointer ${
									viewMode === 'grid'
										? 'bg-indigo-50 text-indigo-600'
										: 'text-gray-500 hover:bg-gray-100'
								}`}
								onClick={() => setViewMode('grid')}
							>
								<LayoutGrid
									size={20}
									strokeWidth={2.5}
								/>
							</button>
							<button
								className={`p-2 rounded-md cursor-pointer ${
									viewMode === 'list'
										? 'bg-indigo-50 text-indigo-600'
										: 'text-gray-500 hover:bg-gray-100'
								}`}
								onClick={() => setViewMode('list')}
							>
								<Menu
									size={20}
									strokeWidth={2.5}
								/>
							</button>
						</div>
					</div>

					{/* Results count - Mobile */}
					{isMobile && !loading && productList && (
						<div className='bg-white rounded-lg shadow-sm p-4 mb-6'>
							<div className='text-sm text-gray-500'>
								Mostrando{' '}
								<span className='font-medium text-gray-900'>
									{productList.length}
								</span>{' '}
								resultados
							</div>
						</div>
					)}

					{/* Loading state */}
					{loading && (
						<div className='bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center'>
							<Loader2 className='h-8 w-8 text-indigo-600 animate-spin mb-4' />
							<p className='text-gray-600'>Cargando...</p>
						</div>
					)}

					{/* No results state */}
					{!loading && !productList && (
						<div className='bg-white rounded-lg shadow-sm p-8 text-center'>
							<h3 className='text-lg font-medium text-gray-900 mb-2'>
								No se encontraron resultados
							</h3>
							<p className='text-gray-500'>
								Intenta con otra categoría o modifica los filtros de búsqueda.
							</p>
						</div>
					)}

					{/* Product list */}
					{!loading && productList && (
						<div
							className={`${
								viewMode === 'grid'
									? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
									: 'space-y-4'
							}`}
						>
							{productList.map((product) => (
								<ProductList
									key={product.id}
									product={product}
									viewMode={viewMode}
								/>
							))}
						</div>
					)}

					{/* Pagination - Only show if we have products */}
					{!loading && productList && productList.length > 0 && (
						<div className='mt-8 flex justify-center'>
							<nav className='flex items-center space-x-1'>
								<button className='cursor-pointer px-2 py-2 rounded-md text-gray-500 hover:bg-gray-100'>
									<ChevronLeft className='w-5 h-5' />
								</button>
								{[1, 2, 3, 4, 5].map((page) => (
									<button
										key={page}
										className={`px-4 py-2 rounded-md cursor-pointer ${
											page === 1
												? 'bg-indigo-50 text-indigo-600 font-medium'
												: 'text-gray-500 hover:bg-gray-100'
										}`}
									>
										{page}
									</button>
								))}
								<button className='cursor-pointer px-2 py-2 rounded-md text-gray-500 hover:bg-gray-100'>
									<ChevronRight className='w-5 h-5' />
								</button>
							</nav>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
