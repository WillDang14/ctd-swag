import ProductCard from './ProductCard';

/* ========================================================= */
/*ProductList.jsx*/
function ProductList({ inventory, children }) {
  return (
    <ul>
      {children}

      {inventory.map((item) => {
        return (
          <ProductCard
            key={item.id}
            baseName={item.baseName}
            baseDescription={item.baseDescription}
          />
        );
      })}
    </ul>
  );
}

/* ========================================================= */
export default ProductList;
