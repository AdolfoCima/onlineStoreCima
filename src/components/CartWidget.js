import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './CartWidget.css';

function CartWidget() {
  return (
    <header>
      {/* <i  className="fa-regular fa-cart-shopping btn btn-primary"></i>  */}
      <FontAwesomeIcon icon={faShoppingCart} className="fa-regular fa-cart-shopping btn btn-primary"/>
      <span className="badge bg-secondary">4</span>
    </header>
  );
}

export default CartWidget;
