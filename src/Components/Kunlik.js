import React ,{useState,useEffect}from 'react';
import '../App.css'
import {kunOddiy, oyOddiy} from '../megabaytlar'

const Kunlik = () => {
    const [img,setImg] = useState (false);
    const [item,setItem] = useState([])
    useEffect(() => {
        setItem(kunOddiy)
    }, [])

    const KHandler= ()=>{
        setItem(kunOddiy) 
  }
   
    const OHandler= ()=>{
        setItem(oyOddiy)
  }
  
    return (
        <div>
        <div className='Oddiy'>
            {
                img?(  <div href='#'  onClick={()=>setImg(false)} className='ooddiy'><img src='Cr1.svg'  className='oddiy' onClick={KHandler}></img><div><h1 className='hk'>Kunlik</h1></div></div> )
                
                :(<div href='#'  onClick={()=>setImg(false)}  className='ooddiy'><img src='Cr1.svg' className='oddiy1'  onClick={KHandler}></img><div><h1 className='hk'>Kunlik</h1></div></div>)
            }
           
            
          {
              img? (<div href='#'   onClick={()=>setImg(true)}  className='ooddiy'><img src='Cr30.svg' className='oddiy1' onClick={OHandler}></img><div><h1 className='hk'>Oylik</h1></div></div>)
            :( <div href='#'    onClick={()=>setImg(true)} className='ooddiy'><img src='Cr30.svg' className='oddiy' onClick={OHandler}></img><div><h1 className='hk'>Oylik</h1></div></div>)
          }
          
           
            </div>
            <div  className='lists '>
            {
                item.map(obj=>(
                        <a href={obj.id} className='item' >{obj.name}</a>
                )
                )
            }
            </div>
            </div>
     
    )
}

export default Kunlik;
