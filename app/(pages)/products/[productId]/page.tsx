import { fetchProduct } from '@/components/features/Product/fetchProduct';

export default async function Page({
	params,
}: {
	params: Promise<{ productId: string }>;
}) {
	const { productId } = await params;

	// Convertir productId a número y validar
	const productIdNumber = Number(productId);
	if (isNaN(productIdNumber)) {
		return <div>ID de producto inválido</div>;
	}

	// Usar fetchProduct para obtener el producto
	const product = await fetchProduct(productIdNumber);

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
