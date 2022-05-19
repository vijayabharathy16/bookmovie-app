import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Cartitem from './Cartitem';
import { useState } from 'react';




let productsDetail = [
  {
    pId : 1,
    pName : "Beast",
    pPrice : 500,
    stock : true
  },
  {
    pId : 2,
    pName : "Don",
    pPrice : 400,
    stock : false
  },
  {
    pId : 3,
    pName : "RRR",
    pPrice : 200,
    stock : false
  },
  {
    pId : 4,
    pName : "Gobura",
    pPrice : 300,
    Stock : false
  },
  {
    pId : 5,
    pName : "KGF 2",
    pPrice : 700,
    stock : true
  },
  {
    pId : 6,
    pName : "Angry Bird",
    pPrice : 100,
    stock : true
  },
  {
    pId : 7,
    pName : "Tom and jerry",
    pPrice : 200,
    stock : false
  },
  {
    pId : 8,
    pName : "valimai",
    pPrice : 200,
    stock : true
  }
]

function App() {

  const [cartItems,setCartItems] = useState([])
  const [total,setTotal] = useState(0)

  let showPrice = (data/* Particular clicked element of productsDetail's array*/) => {
    setCartItems([...cartItems,data])
    setTotal(total+data.pPrice)
  };

  let removeItem = (item)=>{
    let index = cartItems.findIndex(cItem => cItem.pId == item.pId)
    cartItems.splice(index,1);
    setCartItems([...cartItems])
    setTotal(total-item.pPrice)
  }
  return (
    <>
   
    <div className="container-fluid">
      <div className='row'>
        <div className='col-lg-9'>
          <div className='row'>
           <h1 style={{color:"white"}}> LA Cinema</h1>
            {
              productsDetail.map((product)=>{
                return <Product data={product} sp={showPrice}></Product>
              })
            }
            
          </div>
        </div>
        

        <div className='col-lg-3'>
      
          <h1 style={{color:"white"}}>Tickets ({cartItems.length})</h1>
          {
            cartItems.map((item)=>{
              return <Cartitem remove={removeItem} cartData={item} ></Cartitem>
            })
          }
          
          <h2 style={{color:"white"}}>Total = {total}</h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;