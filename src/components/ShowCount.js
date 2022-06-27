import React, { useEffect, useState } from 'react';
import GetContract from '../hooks/GetContract';

const ShowCount = () => {
    const[count,setCount]=useState(null);
    const contract = GetContract();

    const showCount=async()=>{
        var temp = await contract.getCount();
        var cnt = temp.toString();
        setCount(cnt)
    }

    return ( 
        <div className='flex flex-row w-[100vw] p-20 justify-between'>
            <label className='font-mono font-bold text-[20px] pl-20 w-[fit-content]'>Current Count : {count}</label>
            <button className='bg-sky-200 rounded-md w-[fit-content] font-mono text-20px mr-20 px-4  hover:shadow-lg' onClick={showCount} >Refresh Count</button>
        </div>
     );
}
 
export default ShowCount;