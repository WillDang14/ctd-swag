/*Header.jsx*/
import { useEffect } from 'react';
import ctdLogo from './assets/icons/mono-blue-logo.svg';
import shoppingCart from './assets/icons/shoppingCart.svg';

/* ========================================================= */
function Header({ cart }) {
  useEffect(() => {
    console.log('cart', cart); // đặt chỗ này có vẻ ổn

    cart.forEach((item) => {
      console.log(item.baseName, item.cartItemId);
    });

    if (cart.length > 0) {
      console.log('--end of cart--');
    }
  });

  // console.log('cart', cart); // chỗ này ko được

  return (
    <header>
      <div className="siteBranding">
        <img src={ctdLogo} alt="Code The Dream Logo" />

        <h1>CTD Swag</h1>
      </div>

      <div className="shoppingCart">
        <button type="button">
          <img src={shoppingCart} alt="" />

          <p className="cartCount">{cart.length}</p>
        </button>
      </div>
    </header>
  );
}

/* ========================================================= */
export default Header;
