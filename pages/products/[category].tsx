import { useRouter } from 'next/router';

const ProductCategory = () => {
	const router = useRouter();
	return (
		<div>
			<h1>Categoria {router.query.category}</h1>
            <button onClick={() => router.push('/')}>Home Page</button>
		</div>
	);
};

export default ProductCategory;
