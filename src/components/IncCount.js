import React from 'react';
import { useSigner } from 'wagmi';
import { ethers } from 'ethers';
import GetContract from '../hooks/GetContract';
import { useWaitForTransaction } from 'wagmi';
import { useState } from 'react';
import WaitTx from './WaitTx';

const IncCount = () => {
    const contract = GetContract();
    const[thash,setHash]=useState('');

    const increase = async()=>{
        var data = await contract.inc();
        setHash(data.hash);
    }

    return(
        <div className='flex flex-row justify-around p-20'>
            <button className='font-mono text-[20px] bg-slate-100 w-[fit-content] px-4 rounded-md hover:shadow-lg' onClick={increase} >Increase</button>
            <WaitTx value={thash} />
        </div>
    )
}
 
export default IncCount;