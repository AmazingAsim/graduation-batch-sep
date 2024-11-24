import React, { useEffect, useRef, useState } from 'react'

export default function Coin() {
    let [coinurl,setCoinUrl] = useState('heads.png');
    let [flips,setFlips] = useState(0);
    let [heads,setHeads] = useState(0);
    let [tails,setTails] = useState(0);

    let coinRef = useRef();
    function flip(){
        coinRef.current.style.display = 'none';
        setTimeout(function(){ coinRef.current.style.display = 'inline';},10)
        setFlips(flips+1);
        let random = Math.random();
        if(random<0.5){
            setCoinUrl('heads.png');
            setHeads(heads+1);
        }
        else if(random>0.5){
            setCoinUrl('tails.png');
            setTails(tails+1);
        }
    }

useEffect(function(){
       console.log('coin game starts');

       return(function(){
           console.log('coin game ends');
       })
},[]);

  return (
    <div>
        <header className='bg-warning text-center p-5'>
            <h1 className='display-1'>Flip the coin</h1>
            <p className='lead'>click on the button to flip the the coin and see the result as <br/> heads or tails.</p>
        </header>
        <div className="container text-center">
            <img ref={coinRef} id='coinElement' src={coinurl} alt="" className='rounded-circle'/> 
            <br/>
            <button className='btn btn-primary px-4 mt-4' onClick={flip}>Flip</button>
            <p className='lead'>Out of {flips} flips there are {heads} heads and {tails} tails</p>
        </div>
    </div>
  )
}
