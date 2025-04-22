import { useEffect, useRef, useState } from 'react';

import './App.css';
import './assets/css-reset.css';

import inventoryData from './assets/inventory.json';

import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

import Cart from './Cart';
/* ========================================================= */

function App() {
  const [inventory, setInventory] = useState([]);

  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  // tu them vao de check cart state
  // useEffect(() => {
  //   console.log('cart = ', cart);
  // }, [cart]);

  function handleAddItemToCart(id) {
    // const target = inventory.find((item) => item.id === id);

    // if (!target) {
    //   console.error('cart error: item not found');
    //   return;
    // }

    // const cartItem = { ...target, cartItemId: Date.now() };

    // console.log('cartItem = ', cartItem);

    // setCart([...cart, cartItem]);

    // week 5
    const inventoryItem = inventory.find((item) => item.id === id);

    if (!inventoryItem) {
      console.error('cart error: item not found');

      return;
    }

    // tìm trong cart xem có item đang add vô có trong cart chưa
    const itemToUpdate = cart.find((item) => item.id === id);

    let updatedCartItem;

    // nếu tìm thấy trong cart có item đó rồi thì add thêm thông tin số lượng vào
    // nếu không tìm thấy trong cart item đó thì đương nhiên là số lượng = 1
    if (itemToUpdate) {
      updatedCartItem = {
        ...itemToUpdate,
        itemCount: itemToUpdate.itemCount + 1,
      };
    } else {
      updatedCartItem = { ...inventoryItem, itemCount: 1 };
    }

    //

    // update cart state với filter lại cart
    // filter những item không trùng id, còn item có id trùng thì xếp cuối
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

        {/*`isCartOpen has to be true for the cart to be rendered*/}
        {/* {isCartOpen && <Cart cart={cart} handleCloseCart={handleCloseCart} />} */}

        {isCartOpen && (
          <Cart
            cart={cart}
            setCart={setCart} // only change
            handleCloseCart={handleCloseCart}
          />
        )}
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
