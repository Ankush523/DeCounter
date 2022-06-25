import React from 'react';
import { useContract } from 'wagmi';
import CounterABI from '../contracts/ABIs/CounterABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xd3cf855357f1D3a92dC99f7542bDe30b3D48a997',
        contractInterface: CounterABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;