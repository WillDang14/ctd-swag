// src/features/Cart/CartItem.jsx
import placeholder from '../../assets/placeholder.png';

/* ========================================================= */
function CartItem({ item, onHandleItemUpdate }) {
  return (
    <li className="cartListItem">
      {/*key removed since no longer used here*/}
      <img src={placeholder} alt="" />

      <div>
        <h2>{item.baseName}</h2>

        {item.variantName !== 'Default' ? <p>{item.variantName}</p> : null}
      </div>

      <div className="cartListItemSubtotal">
        <label>
          Count:{' '}
          <input
            type="number"
            value={item.itemCount}
            onChange={(event) => onHandleItemUpdate({ event, id: item.id })} //handler name updated
          />
        </label>

        <p>Subtotal: ${(item.price * item.itemCount).toFixed(2) || '0.00'}</p>
      </div>
    </li>
  );
}

/* ========================================================= */
export default CartItem;
