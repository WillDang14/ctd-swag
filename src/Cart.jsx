/* 
Code bài này ở Week 5

# To get started, we create a cart component which contains the contents of the shopping cart, a cart total, and a button to close the cart.

*/

import { useEffect, useState } from 'react';

//Cart.jsx
import placeholder from './assets/placeholder.png';

/* ========================================================= */
/* 
# `handleCloseCart` is not made yet but we know we will need it

*/

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

    //avoid re-ordering array when updating cart item
    // chú ý là mỗi lần add thêm add ở ngoài thì item được add vào sẽ nằm dưới cùng
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

    // chú ý là cart không thay đổi, chỉ có workingCart là thay đổi
    // tức là sử lại lại giá trị ban đầu cho workingCart
    setWorkingCart([...cart]);
  }

  // "handleConfirm" prevents the form from refreshing, calls "setCart" with the "workingCart" value
  // We also add in a helper function removeEmptyItems that removes any item that has a count of 0
  // It's okay to have an item in the cart with a value of 0 while the user is still editing
  // but it should be removed once they are okay with their edits
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
                  <li className="cartListItem" key={item.id}>
                    <img src={placeholder} alt="" />

                    <h2>{item.baseName}</h2>

                    {item.variantName !== 'Default' ? (
                      <p>{item.variantName}</p>
                    ) : null}

                    <div className="cartListItemSubtotal">
                      {/* <p>${item.price}</p> */}
                      {/* Cái này là theo code hướng dẫn */}
                      {/* <p>Count: {item.itemCount}</p> */}

                      {/* Cái này là dựa theo animation show trong lesson. */}
                      {/* Chọn cái nào cũng được */}
                      {/* Count: <input type="number" value={item.itemCount} /> */}

                      <label>
                        Count:
                        <input
                          type="number"
                          value={item.itemCount}
                          onChange={(event) =>
                            handleUpdateField({ event, id: item.id })
                          }
                        />
                      </label>

                      {/* <p>
                        Subtotal: ${(item.price * item.itemCount).toFixed(2)}
                      </p> */}

                      <p>
                        Subtotal: $
                        {(item.price * item.itemCount).toFixed(2) || 0}
                      </p>
                    </div>
                  </li>
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

        {/* cart total will need to be calculated */}
        {/* <h2>Cart Total: ${getCartPrice()}</h2> */}
        <h2>Cart Total: ${getWorkingCartPrice() || 0}</h2>

        <button onClick={handleCloseCart}>CloseCart</button>
      </div>
    </>
  );
}

/* ========================================================= */
export default Cart;
