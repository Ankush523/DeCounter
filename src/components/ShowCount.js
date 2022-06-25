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
        <div>
            <label>Current Count : {count}</label>
            <button onClick={showCount} >Refresh Count</button>
        </div>
     );
}
 
export default ShowCount;