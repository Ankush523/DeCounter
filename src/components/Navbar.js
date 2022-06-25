import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] shadow-xl justify-between '  >
            <label className='text-blue-500 font-bold text-2xl' >DeCounter</label>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;