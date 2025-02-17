function ProductItem( {product} ) {
    return (
        <div className="product-item">
            <h2>{product.name}</h2>
            <p>Price {product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductItem;