import { useEffect, useRef, useState } from 'react';

import './App.css';
import './assets/css-reset.css';

import inventoryData from './assets/inventory.json';

import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

// import Cart from './Cart';
import Cart from './features/Cart/Cart';

import Footer from './layout/Footer';
/* ========================================================= */

function App() {
  const [inventory, setInventory] = useState([]);

  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  function handleAddItemToCart(id) {
    const inventoryItem = inventory.find((item) => item.id === id);

    if (!inventoryItem) {
      console.error('cart error: item not found');

      return;
    }

    const itemToUpdate = cart.find((item) => item.id === id);

    let updatedCartItem;

    if (itemToUpdate) {
      updatedCartItem = {
        ...itemToUpdate,
        itemCount: itemToUpdate.itemCount + 1,
      };
    } else {
      updatedCartItem = { ...inventoryItem, itemCount: 1 };
    }

    setCart([...cart.filter((item) => item.id !== id), updatedCartItem]);

    //
  }

  function handleRemoveItemFromCart(id) {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart([...updatedCart]);
  }

  function handleCloseCart() {
    //prevents re-render if unchanged
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  }

  function handleOpenCart() {
    //prevents re-render if unchanged
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  }

  return (
    <>
      <Header cart={cart} handleOpenCart={handleOpenCart} />

      <main>
        <ProductList
          inventory={inventory}
          handleAddItemToCart={handleAddItemToCart}
        ></ProductList>

        {isCartOpen && (
          <Cart
            cart={cart}
            setCart={setCart}
            handleCloseCart={handleCloseCart}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
/* ========================================================= */
export default App;
