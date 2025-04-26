export default function Badge({ children }: { children: React.ReactNode }) {
	<div className='absolute top-2 left-2 z-10'>
		<span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800'>
			{children}
		</span>
	</div>;
}
