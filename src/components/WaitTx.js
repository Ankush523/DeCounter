import React from 'react';
import { useWaitForTransaction } from 'wagmi';

const WaitTx = ({value}) => {
    const { data, isError, isLoading } = useWaitForTransaction({
        hash: `${value}`,
      })
    
      if (isLoading) return <div>Processing…</div>
      if (isError) return <div>Transaction error</div>
      return <div>Transaction Completed </div>
}
 
export default WaitTx;