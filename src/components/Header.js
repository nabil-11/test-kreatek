import React from 'react'
import { Shop } from './Shop'
import { useSelector } from 'react-redux'
export const Header = () => {
  const user = useSelector((state) => state.user.user)
  const cart = useSelector((state) => state.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">user : {user.nom_complet}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/">Products</a>
          </li>   <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/add_product">add Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add_user">Add User</a>
          </li>
          
     
          
        </ul>
        
        <button type="button" className="btn btn-primary position-relative mx-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Shop
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
 {cart.cartTotalQuantity}
  </span>
    </button>
    <Shop />
      </div>
    </div>
  </nav>
  )
}
