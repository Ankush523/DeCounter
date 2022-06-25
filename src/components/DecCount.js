import React from 'react';
import { useSigner } from 'wagmi';
import GetContract from '../hooks/GetContract';
import { useWaitForTransaction } from 'wagmi';
import { useState } from 'react';
import WaitTx from './WaitTx';
const DecCount = () => {
    const contract = GetContract();
    const [thash2,setHash2]=useState('');
    const decrease = async()=>{
        var data2 = await contract.dec();
        setHash2(data2.hash);
    }
    return (
        <div>
            <button onClick={decrease}> Decrease </button>
            <WaitTx value= {thash2}/>
        </div>
    );
}
 
export default DecCount;