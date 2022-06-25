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
        <div>
            <button onClick={increase} >Increase</button>
            <WaitTx value={thash} />
        </div>
    )
}
 
export default IncCount;