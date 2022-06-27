import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row w-[100vw] bg-slate-900 h-[fit-content] p-[20px] shadow-xl justify-between '  >
            <label className='font-serif text-blue-400 font-light text-3xl' >DeCounter</label>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;