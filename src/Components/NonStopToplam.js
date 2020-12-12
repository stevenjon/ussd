import React ,{useState,useEffect}from 'react';
import '../App.css'
import {kunNonStop,oyNonStop} from '../megabaytlar'


const NonStop = () => {
    const [img,setImg] = useState(true);
    const [item,setItem] = useState([])
    useEffect(() => {
        setItem(oyNonStop)
    }, [])

   
    const OHandler= ()=>{
        setItem(oyNonStop)
  }
  
    return (
        <div>
        <div className='Oddiy'>
            {
                img?(  <div href='#' onClick={()=>setImg(true)}  className='ooddiy'><img src='Cr30.svg'  className='oddiy1' onClick={OHandler}  ></img><div><h1 className='hk'>Oylik</h1></div></div>)
                :(  <div href='#'    onClick={()=>setImg(true)} className='ooddiy'><img src='Cr30.svg'  className='oddiy' onClick={OHandler}></img><div><h1 className='hk'>Oylik</h1></div></div>)
            }
          
            </div>
            <div  className='lists '>
            {
                item.map(obj=>(
                        <a href={obj.id} className='item' >{obj.name}</a>
                )
                )
            }
             <hr className='nonStopLine' ></hr>
            <h4 className="nonStopText">Non-Stop to'plamlar haqida</h4>
            <div className='nonInfo'>
            <h6 className='nonStopInfooo' style={{fontSize: "4vw"}}>
            Non-Stop to'plamlar avtomatik uzaytiriladigan to'plamlar bo'lib, to'plamning muddati tugaydigan kun kelganida hisobingizdan avtomatik tarzda to'plam narxining 90%ga teng miqdorda mablag' yechib oladi va to'plam taqdim etadi.
            </h6>
            </div>
            </div>
            </div>
     
    )
}

export default NonStop;