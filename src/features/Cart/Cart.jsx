/* 
Code bài này ở Week 6

*/

import { useEffect, useState } from 'react';

import CartItem from './CartItem';

/* ========================================================= */
function Cart({ cart, handleCloseCart, setCart }) {
  //
  const [workingCart, setWorkingCart] = useState(cart);
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    console.log('workingCart = ', workingCart);
  }, [workingCart]);

  //
  // function getCartPrice() {
  //   return cart
  //     .reduce((acc, item) => acc + item.price * item.itemCount, 0)
  //     .toFixed(2);
  // }

  function getWorkingCartPrice() {
    return workingCart
      .reduce((acc, item) => acc + item.price * item.itemCount, 0)
      .toFixed(2);
  }

  //
  function handleUpdateField({ event, id }) {
    // prevent re-render if already dirty
    event.preventDefault();

    if (!isFormDirty) {
      setIsFormDirty(true);
    }

    const targetProduct = cart.find((item) => item.id === id);

    const targetIndex = cart.findIndex((item) => item.id === id);

    //reject negative values or if user deletes value
    if (!targetProduct) {
      console.error('cart error: item not found');
      return;
    }

    // create new object instead of updating old
    if (event.target.value < 0 || event.target.value === '') {
      return;
    }

    const updatedProduct = {
      ...targetProduct,
      itemCount: parseInt(event.target.value, 10), // cập nhật số lượng item, hệ 10
    };

    // giữ nguyên vị trí items trong Array
    setWorkingCart([
      ...workingCart.slice(0, targetIndex),
      updatedProduct,
      ...workingCart.slice(targetIndex + 1),
    ]);
  }

  //
  function handleCancel(e) {
    e.preventDefault();

    setIsFormDirty(false);

    setWorkingCart([...cart]);
  }

  function handleConfirm(e) {
    e.preventDefault();

    // handleUpdateCart([...removeEmptyItems(workingCart)]); // handleUpdateCart() không có ở week5

    setCart(workingCart);

    setIsFormDirty(false);
  }

  return (
    <>
      <div className="cartScreen"></div>

      <div className="cartListWrapper">
        {workingCart.length === 0 ? (
          <p>cart is empty</p>
        ) : (
          <form>
            <ul className="cartList">
              {workingCart.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onHandleItemUpdate={handleUpdateField}
                  />
                );
              })}
            </ul>

            {isFormDirty && (
              <div>
                <button onClick={handleConfirm}>Confirm Update</button>
                <button onClick={handleCancel}>Cancel Update</button>
              </div>
            )}
          </form>
        )}

        <h2>Cart Total: ${getWorkingCartPrice() || 0}</h2>

        <button onClick={handleCloseCart}>CloseCart</button>
      </div>
    </>
  );
}

/* ========================================================= */
export default Cart;
