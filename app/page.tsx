import { SearchBar } from '@/components/features/Input/SearchBar';
import ShoppingKart from '@/components/features/Button/Shopping/ShoppingKart';
import Card from '@/components/features/Product/Card/Card';

export default function Home() {
	return (
		<div className='flex justify-around'>
			<SearchBar />
			<ShoppingKart />
			<Card />
		</div>
	);
}
