import {React , useState } from 'react'
import About from './About'


const App = () => {

  //! State With Number
  const [count , setCount] = useState(0);

  //? State With Object
  const [porduct, setProduct] = useState({
    product1:'t-shirt'
    ,product2:'plozaa'
    ,product3:'pantalon'
    ,product4:'jaket'
  })

  //? Function to update value
  const updateValue = ()=>{
    setProduct((State)=>{
      return{
        ...State 
        , product1:' t-shirt for Ammar ' 
        , product2:' plozaa for hapepa ' 
        , product3:' pantalon for yousef '
        , product4:' jaket for mariam '
      }
    })
  }

  return (
    <div>
      //* Default word
      App

      <br/>
      <br/>

      //? State With Object
      <h1>[
        {porduct.product1} , 
        {porduct.product2} , 
        {porduct.product3} , 
        {porduct.product4}]
      </h1>

      <button onClick={updateValue} >Update</button>

      <br/>
      <br/>

      //! State With Number
      <h1> {count} </h1>
      <button onClick={()=>setCount(count+1)} > + </button>
      <button onClick={()=>setCount(count-1)} > - </button>

      <br/>
      <br/>

      //todo HandelEvent onClick
      <About/>     
    </div> 


  )
}

export default App