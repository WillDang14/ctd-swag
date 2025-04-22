import { useState } from 'react';

import placeholder from './assets/placeholder.png';

import ProductCardVariants from './ProductCardVariants';
/* ========================================================= */
/*ProductCard.jsx*/
// function ProductCard({ id, name, description, handleAddItemToCart }) {
//   return (
//     <li className="productCard">
//       <div className="productPreview">
//         <img src={placeholder} alt="" />
//       </div>

//       <div className="productCopy">
//         <h2>{name}</h2>
//         <p>{description}</p>
//       </div>

//       <div className="productButtons">
//         <button onClick={() => handleAddItemToCart(id)}>Add to Cart</button>
//       </div>
//     </li>
//   );
// }

/* ========================================================= */
/*
Code này ở Week 5:
Sẽ bị thay thế bằng code ở dưới
*/

// function ProductCard({ product, handleAddItemToCart }) {
//   return (
//     <li className="productCard">
//       <div className="productPreview">
//         <img src={placeholder} alt="" />
//       </div>

//       <div className="productCopy">
//         <h2>{product.baseName}</h2>
//         <p>{product.baseDescription}</p>
//       </div>

//       <div className="productButtons">
//         {product.variants.length > 1 ? (
//           <button>Show Options</button>
//         ) : (
//           <button onClick={() => handleAddItemToCart(product.variants[0].id)}>
//             Add to Cart
//           </button>
//         )}
//       </div>
//     </li>
//   );
// }

/* ========================================================= */
/* 
Code này ở Week 5:

Finally, we need to display the variants to the user so they can add them to their cart. 
For this, we create another component, ProductCardVariants that accepts an array of variants, 
a handler function to close the display, and a handler function to add an item to the cart.

# "areVariantsShown" dùng là 1 useState dùng để hiển thị "variant"

*/

function ProductCard({ product, handleAddItemToCart }) {
  const [areVariantsShown, setAreVariantsShown] = useState();

  return (
    <li className="productCard">
      <div className="productPreview">
        <img src={placeholder} alt=" " />
      </div>

      <div className="productCopy">
        <h2>{product.baseName}</h2>
        <p>{product.baseDescription}</p>
      </div>

      <div className="productButtons">
        {product.variants.length > 1 ? (
          <button onClick={() => setAreVariantsShown(true)}>
            Show Options
          </button>
        ) : (
          <button onClick={() => handleAddItemToCart(product.variants[0].id)}>
            Add to Cart
          </button>
        )}
      </div>

      {areVariantsShown && (
        <ProductCardVariants
          handleAddItemToCart={handleAddItemToCart}
          variants={product.variants}
          closeVariants={() => setAreVariantsShown(false)}
        />
      )}
    </li>
  );
}

/* ========================================================= */
export default ProductCard;
