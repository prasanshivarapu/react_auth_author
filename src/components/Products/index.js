import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Products = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="products">
      <img
        className="prod"
        alt="products"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
      />
    </div>
  )
}
export default Products
