import React ,{useEffect}from 'react'
import { getTotals,clearCart,decreaseCart } from '../store/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
 

export const Shop = () => {
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch() ;
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
  return (
  <>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div>
          <h3 className="modal-title fs-5" id="staticBackdropLabel">nom Complet : {user.nom_complet} </h3>
          <h3 className="modal-title fs-5" id="staticBackdropLabel">remise : {user.remise_defaut} </h3>
            <h3 className="modal-title fs-5" id="staticBackdropLabel">solde : {cart.cartTotalAmount} TND</h3>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='container border '>
 { cart.cartItems.map( c =>    <div class="card m-2">
      <div class="card-body">
        <h5 class="card-title">{c.libelle}</h5>
        <p class="card-text text-end">{c.cartQuantity } +  {c.prix_ttc} TND  = <span className=''> {c.cartQuantity *c.prix_ttc}</span> TND </p>
     <button className='btn btn-outline-danger btn-sm d-flex ms-auto' onClick={()=>dispatch(decreaseCart(c))} >Cancel </button>
      </div>
    </div>
 ) }
    </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger" onClick={()=>dispatch(clearCart())} >Clear All</button>
            <button type="button" className="btn btn-primary"> checkout </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
