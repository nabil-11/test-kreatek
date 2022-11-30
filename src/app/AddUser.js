import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'

export const AddUser = () => {
    const [User,setUser]= useState( {
        nom_complet : String ,
        remise_defaut: Number 
    })
    const dispatch = useDispatch()
    const  handleSubmit=async(e)=>{
        e.preventDefault()
            console.log(User)
            try{
            dispatch(addUser(User))
            }catch(err){
    
                console.log(err)
            }
        }
  return (
   
  <form onSubmit={handleSubmit}>
<div className="form-floating mb-3">
            <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="nom complet" onChange={(e)=>setUser({...User,nom_complet:e.target.value})} value={User.nom_complet}/>
            <label htmlFor="floatingInput"> nom complet</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control rounded-3" id="floatingInput" placeholder="nom complet" onChange={(e)=>setUser({...User,remise_defaut:e.target.value})} value={User.remise_defaut}/>
            <label htmlFor="floatingInput"> remise defaut</label>
          </div>
          <button className='btn btn-primary px-5  d-flex ms-auto' type='submit' >Add User</button>
  </form>
  )
}
