export interface ProductProps {
    id: number;
    title: string;
    description: string;
    category: string;
    stock: number;
    brand: string;
    price: number;
    rating: number;
}

interface ProductsProps {
    products: ProductProps[];
}

export default async function Products() {

    const baseUrl = process.env.DUMMY_BASE_URL

    async function fetchProducts() {
        'use server';
        const response = await fetch(`${baseUrl}/products`)
        const data: ProductsProps = await response.json()
        return data;
    }

    async function handleSearchProduct(formData: FormData) {
        'use server';
        const search = formData.get('search')
        const response = await fetch(`${baseUrl}/products/search/q=${search}`, {})
        if (response.ok) {
            const data: ProductsProps = await response.json()
            return data;
        } else if (response.status === 404) {
            return {
                products: []
            }
        }
    }

    const data = await fetchProducts();
    return (
        <div className={'uk-container mt-5'}>
            <h1 className={'uk-heading-medium'}>Produtos</h1>
            <div className="uk-margin">
                <form className="uk-search uk-search-default" action={handleSearchProduct}>
                    <input className="uk-search-input" type="search" placeholder="Search" aria-label="Search" name="search"/>
                    <button className="uk-button uk-button-primary" type="submit">Submit</button>
                </form>
            </div>
            {data.products.map(product => (
                <div key={product.id} className={'uk-card uk-card-default uk-card-body mb-5'}>
                    <h2><b>Product:</b> {product.title}</h2>
                    <p><b>Description:</b> {product.description}</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Stock:</b> {product.stock}</p>
                    <p><b>Brand:</b> {product.brand}</p>
                    <p><b>Price:</b> {product.price}</p>
                    <p><b>Rating:</b> {product.rating}</p>
                </div>
            ))}
        </div>
    )
}