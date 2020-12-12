import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const Nav = () => {
    const [item,setItem] = useState(false);
    
    
    return (
        <div>
              <nav>
           <ul className="nav-links">
               {
                   item?(<Link to="/">
                   <div className='day' onClick={()=>setItem(false)}>Oddiy to'plamlar</div>
                   </Link>):(<Link to="/">
                   <div className='day1' onClick={()=>setItem(false)}>Oddiy to'plamlar</div>
                   </Link>)
               }
               {
                   item?(<Link to="/non">
                   <div className='day1' onClick={()=>setItem(true)}  >Non Stop to'plamlar </div>
                   </Link>):(  <Link to="/non">
               <div className='day' onClick={()=>setItem(true )}  >Non Stop to'plamlar </div>
               </Link>)
               }
             
           </ul>
           

       </nav> 
       <h1 className ='h1'>UZMOBILEDAN INTERNET TO'PLAMLAR</h1>
        </div>
    )
}

export default Nav
    