import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Cart = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="products">
      <img
        className="prod"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    </div>
  )
}

export default Cart
