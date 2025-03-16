import { SearchBar } from '@/components/features/Input/SearchBar';
import ShoppingKart from '@/components/features/Button/Shopping/ShoppingKart';

export default function Home() {
	return (
		<div className='flex justify-around'>
			<SearchBar />
			<ShoppingKart />
		</div>
	);
}
