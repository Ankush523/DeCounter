import React from 'react';
import { useBalance } from 'wagmi';
import GetAccount from './GetAccount';
const GetBalance = () => {
    const {data} = useBalance({
        addressOrName: GetAccount().toString()
    });
    return (data?.formatted)+" "+(data?.symbol)
}
 
export default GetBalance;