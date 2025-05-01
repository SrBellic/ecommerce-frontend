import { fetchProduct } from '@/components/features/Product/fetchProduct';
import { Product } from '@/interfaces/interfaces';
import { Metadata } from 'next';
import { Capitalize } from '@/utils/utils';

type ProductMetadata = Pick<
	Product,
	'id' | 'name' | 'description' | 'brand' | 'category'
>;

type Props = {
	params: Promise<{ productId: string }>;
};

//Functión para generar metadata dinámicamente
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { productId } = await params;

	const productIdNumber = Number(productId);

	const product = await fetchProduct(productIdNumber);

	if (isNaN(productIdNumber)) {
		return {
			title: 'Producto inválido',
			description: 'El producto no es válido',
		};
	}

	if (!product) {
		return {
			title: 'Producto no encontrado',
			description: 'El producto no fue encontrado',
		};
	}
	const { name, description, brand, category }: ProductMetadata = product;

	return {
		title: Capitalize(name),
		description: Capitalize(description) || 'No hay descripción disponible',
		keywords: [brand, name, category].map((word) => Capitalize(word)),
	};
}

export default async function Page({ params }: Props) {
	const { productId } = await params;

	// Convertir productId a número y validar
	const productIdNumber = Number(productId);

	// Usar fetchProduct para obtener el producto
	const product = await fetchProduct(productIdNumber);
	if (isNaN(productIdNumber)) {
		return <div>Producto inválido</div>;
	}

	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	return (
		<div>
			<h1>{product.name}</h1>
			<p>Marca: {product.brand}</p>
			<p>{!product.description ? 'N/A' : product.description}</p>
			<p>Precio: ${product.price}</p>
			<p>color: {product.color}</p>
			<p>disponible: {product.stock}</p>
		</div>
	);
}
