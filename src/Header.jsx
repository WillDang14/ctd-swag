/*Header.jsx*/
import { useEffect } from 'react';
import ctdLogo from './assets/icons/mono-blue-logo.svg';
import shoppingCart from './assets/icons/shoppingCart.svg';

/* ========================================================= */
function Header({ cart, handleOpenCart }) {
  // Week 5 ask to remove useEffect()
  // useEffect(() => {
  //   console.log('cart', cart); // đặt chỗ này có vẻ ổn

  //   cart.forEach((item) => {
  //     console.log(item.baseName, item.cartItemId);
  //   });

  //   if (cart.length > 0) {
  //     console.log('--end of cart--');
  //   }
  // });

  // console.log('cart', cart); // chỗ này ko được

  // week 5 ==>> đém số lượng item trong cart
  function getItemCount() {
    return cart.reduce((acc, item) => acc + item.itemCount, 0);
  }

  return (
    <header>
      <div className="siteBranding">
        <img src={ctdLogo} alt="Code The Dream Logo" />

        <h1>CTD Swag</h1>
      </div>

      <div className="shoppingCart">
        <button type="button" onClick={handleOpenCart}>
          <img src={shoppingCart} alt="" />

          {/* <p className="cartCount">{cart.length}</p> */}

          <p className="cartCount">{getItemCount()}</p>
        </button>
      </div>
    </header>
  );
}

/* ========================================================= */
export default Header;
