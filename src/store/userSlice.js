import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name:"user" ,
    initialState : {
        user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {} } ,reducers :{
            addUser(state,action){
              state.user = action.payload
              console.log(action.payload)
                localStorage.setItem("user", JSON.stringify(state.user));
            },
            deleteUser(){
               const user =[]
                localStorage.setItem("user", JSON.stringify(user));
            }
        }

})
export const {addUser,deleteUser} = userSlice.actions ;
export default userSlice.reducer ;