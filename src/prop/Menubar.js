import React, { useState } from 'react'
import './menu.css'
import {menu} from './Menudata.js';

export default function Menubar() {
    const[countl1,setcountl1]=useState(0);
    const[total,setTotal]=useState('0');

    function handleChange(){
        setcountl1( countl1 + 1);
        setTotal( total + 1 );
    }
    function handlchangeprev(){
        let count= countl1 - 1;
        if(count<=0){
            setcountl1( 0 );
        }
        else{
            setcountl1( countl1 - 1 );
            setTotal( total - 1 );
        }
    }

    const listItems = menu.map(food =>
        
        <div id={food.id} className='menu-bar-list-l1'>
            <div className='menu-bar-l1-container'>
                <div className='menu-bar-list-l1-img' >
                    <img src="https://media.istockphoto.com/id/516401834/photo/authentic-chicken-biryani-with-onion-raita.jpg?s=612x612&w=0&k=20&c=wxB5KbJAMsnph4CscPjAUSYJjymFqeJ9eGc0ATfgLyE=" alt="Image Description" />
                </div>
                <div className='menu-bar-list-l1-title'>{food.name}</div>
            </div>
            <div className='menu-details'>
                <div>
                    <p><i>{food.details}</i></p>
                </div>
                <div><pre><b>Price: {food.price}</b></pre></div>
            </div>
            <div className='item-l1'>
                <div className='item-l1-right'>
                    <p>item added</p>
                    <div className='item-l1-button'>
                        <button onClick={handlchangeprev}>-</button>
                        <button>{food.count}</button>
                        <button onClick={handleChange}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );

  return (
    // <a href='index.html'>
    <div className='menu-bar'>
      <div className='menu-bar-list'>
        <div className='menu-specials'>
            <i>Today's Specials</i>
        </div>
        <ul>{listItems}</ul>
      </div>
      
    </div>
    // </a>
  );
}

// export function count(){
//     const[countl1,setcountl1]=useState(0);
//     function handleChange(){
//         setcountl1( countl1 + 1);
//         setTotal( total + 1 );
//     }
//     function handlchangeprev(){
//         let count= countl1 - 1;
//         if(count<=0){
//             setcountl1( 0 );
//         }
//         else{
//             setcountl1( countl1 - 1 );
//             setTotal( total - 1 );
//         }
//     }
//     return(
        
//     );
// }