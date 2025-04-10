import ProductCard from './ProductCard';

/* ========================================================= */
/*ProductList.jsx*/
function ProductList({ inventory, handleAddItemToCart }) {
  return (
    <ul className="productList">
      {inventory.map((item) => {
        return (
          <ProductCard
            id={item.id}
            key={item.id}
            handleAddItemToCart={handleAddItemToCart}
            name={item.baseName}
            description={item.baseDescription}
          />
        );
      })}
    </ul>
  );
}

/* ========================================================= */
export default ProductList;
