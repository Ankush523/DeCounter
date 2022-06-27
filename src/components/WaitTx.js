import React from 'react';
import { useWaitForTransaction } from 'wagmi';

const WaitTx = ({value}) => {
    const { data, isError, isLoading } = useWaitForTransaction({
        hash: `${value}`,
      })
    
      if (isLoading) return <div className='font-mono font-bold'>Status : Processing…</div>
      if (isError) return <div className='font-mono font-bold'>Status : Transaction error</div>
      return <div className='font-mono font-bold'>Status : Transaction Completed </div>
}
 
export default WaitTx;