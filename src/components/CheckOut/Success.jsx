import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//import { CartContext } from '../../../context/cart-context';
import './checkout.style.css'

const Success = ({ history }) => {
//   const { clearCart, cartItems } = useContext(CartContext);
//   useEffect(() => {
//     if (cartItems.length !==0) { clearCart() }
//   }, [clearCart, cartItems]);

  return (
      <div className='checkout'>
        <h1>Thank you for your order</h1>
        <p>We are currently processing your order and 
          will send you a confirmation email shortly
        </p>
        <div>
          <button className='button is-black nomad-btn submit' 
          onClick={() => history.push('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
  );
}

export default withRouter(Success);