import {React ,useState ,useEffect} from 'react'

const UseEffect = () => {
    const [count ,setCount] = useState(0)

    const [count33 ,setCount33] = useState(3)

    useEffect(()=>{
        console.log('blo7p')
        setInterval(()=> console.log('ammar'),300)
    },[count33])


  return (
    <div>
        {count}
        <button onClick={()=> setCount(count+1)} >+</button>
        <button onClick={()=> setCount(count-1)} >-</button>

        <br/>
        <br/>

        {count33}
        <button onClick={()=> setCount33(count33+3)} >+</button>
        <button onClick={()=> setCount33(count33-3)} >-</button>
        
    </div>

  )
}

export default UseEffect