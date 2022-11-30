import React, { useState } from 'react'
import axios from 'axios'

export const AddProduct = () => {

    const [Product,setProduct]= useState( {
        libelle :String ,
         prix_ttc :Number,
          en_stock :Number,
          is_gift : false 
    })
  const  handleSubmit=async(e)=>{
    e.preventDefault()
        console.log(Product)
        try{
            await axios.post('  http://localhost:4000/products',Product).then(res => console.log(res.data))
        }catch(err){

            console.log(err)
        }
    }
  return (
<form onSubmit={handleSubmit}>
<div className="form-floating mb-3">
            <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="libelle" onChange={(e)=>setProduct({...Product,libelle:e.target.value})} value={Product.libelle}/>
            <label htmlFor="floatingInput"> libelle</label>
          </div>
          <div className="form-floating mb-3">
            <input type="Number" min={0} step={0.001} className="form-control rounded-3" id="floatingInput" placeholder="prix_ttc" onChange={(e)=>setProduct({...Product,prix_ttc:e.target.value})} value={Product.prix_ttc}/>
            <label htmlFor="floatingInput"> prix_ttc</label>
          </div>   
           <div className="form-floating mb-3">
            <input type="Number" min={0} className="form-control rounded-3" id="floatingInput" placeholder="en_stock" onChange={(e)=>setProduct({...Product,en_stock:e.target.value})} value={Product.en_stock}/>
            <label htmlFor="floatingInput"> en_stock</label>
          </div>    
          <div className="form-check form-switch d-flex justify-content-end my-3">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={Product.is_gift} onChange={()=>setProduct({...Product,is_gift:!Product.is_gift})} />
  <label className="form-check-label px-3 " htmlFor="flexSwitchCheckDefault">Is Gift</label>
</div>
     
          <button className='btn btn-primary px-5  d-flex ms-auto' type='submit' >Add Product</button>
</form>
  )
}
