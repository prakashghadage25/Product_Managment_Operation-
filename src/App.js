
import './App.css';
import Navbar from './component/Navbar';
import {Routes , Route} from 'react-router-dom';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Home from './component/Home';

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
         <Route path='/' element={<Home/>}></Route>  
         <Route path='/addProduct' element={<AddProduct/>}></Route>
         <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
    </Routes>
    
  </>
  );
}

export default App;
