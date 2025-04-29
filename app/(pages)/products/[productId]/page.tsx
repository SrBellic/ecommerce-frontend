import fetchProduct from '@/components/features/Product/fetchProduct';

export default async function Page({
	params,
}: {
	params: { productId: string | number };
}) {
	const { productId } = params;

	// Usar fetchProduct para obtener el producto
	const product = await fetchProduct(Number(productId));

	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	return (
		<div>
			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p>Precio: ${product.price}</p>
		</div>
	);
}
