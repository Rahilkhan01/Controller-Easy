import React from 'react';
import './index.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Main';
import Product from './product';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
       
          <Route path='/' element={<Main/>}/>
          <Route path='/product' element={<Product/>}/>
          

        ``
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App 