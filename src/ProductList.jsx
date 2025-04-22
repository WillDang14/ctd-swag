import { useState, useEffect } from 'react';

import ProductCard from './ProductCard';

/* ========================================================= */
/*ProductList.jsx*/
function ProductList({ inventory, handleAddItemToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const workingProducts = [];

    // Code này để lọc ra item có variant khác nhau
    // ví dụ như cùng item khác màu ...
    inventory.forEach((item) => {
      if (!item.inStock) {
        return;
      }

      if (
        !workingProducts.find(
          (productItem) => productItem.baseName === item.baseName
        )
      ) {
        workingProducts.push({
          baseName: item.baseName,
          price: item.price,
          baseDescription: item.baseDescription,
          variants: [{ ...item }],
        });
      } else {
        const index = workingProducts.findIndex(
          (productItem) => productItem.baseName === item.baseName
        );

        workingProducts[index].variants.push({ ...item });
      }
    });

    console.log('workingProducts = ', workingProducts);

    setProducts([...workingProducts]);
  }, [inventory]);

  return (
    <ul className="productList">
      {products.map((product, index) => {
        return (
          <ProductCard
            product={product}
            key={index}
            handleAddItemToCart={handleAddItemToCart}
          />
        );
      })}
    </ul>
  );
}

/* ========================================================= */
export default ProductList;

/* 
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

*/
