import ProductItem from "./ProductItem";

function ProductList({ products }) {
    return (
        /* Make sure you write CSS code for this class. */
        <div className="products-container">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
