
import './App.css';

import { Header } from './components/Header';
import {Routes,Route, BrowserRouter} from "react-router-dom"
 import { Products } from './app/Products';
 import {AddProduct} from "./app/AddProduct"
 import {AddUser} from "./app/AddUser"

function App() {
  return (
    <div className="App">
   
      <Header/>
   <div className='container my-3 border rounded-3 py-3'>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Products/>} />
        <Route path='/add_product'  element={<AddProduct/>} /> 
         <Route path='/add_user'  element={<AddUser/>} />
       

      </Routes>
      </BrowserRouter>
      </div>

    
    </div>
  );
}

export default App;
