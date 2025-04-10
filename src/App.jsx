import { useEffect, useRef, useState } from 'react';

import './App.css';
import './assets/css-reset.css';

import inventoryData from './assets/inventory.json';

import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

/* ========================================================= */

function App() {
  const [inventory, setInventory] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);

    //if no inventory items are found
    //we want to prevent the app from crashing
    //by exiting this function now
    if (!target) {
      console.error('cart error: item not found');
      return;
    }

    //create an new object, spread the contents of the item selected
    //and add a `cartItemId`
    // cùng 1 item nhưng khác thời điểm add
    const cartItem = { ...target, cartItemId: Date.now() };

    console.log('cartItem = ', cartItem);

    setCart([...cart, cartItem]);

    // console.log('cart', cart); // tại sao lại log ra kết quả loop trước
  }

  function handleRemoveItemFromCart(id) {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart([...updatedCart]);
  }

  return (
    <>
      <Header cart={cart} />

      <main>
        <ProductList
          inventory={inventory}
          handleAddItemToCart={handleAddItemToCart}
        ></ProductList>
      </main>

      <footer>
        <p>
          Made with ❤️ | &copy;
          <a href="https://codethedream.org/">CTD </a>
        </p>
      </footer>
    </>
  );
}
/* ========================================================= */
export default App;
