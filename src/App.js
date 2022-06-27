import logo from './logo.svg';
import './App.css';
import GetAccount from './hooks/GetAccount';
import GetBalance from './hooks/GetBalance';
import ShowCount from './components/ShowCount';
import IncCount from './components/IncCount';
import DecCount from './components/DecCount';
import WaitTx from './components/WaitTx';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row w-[100vw] justify-between'>
      <br/>
      <label className='text-black font-bold font-mono text-[20px] p-3 w-[fit-content] mt-4 ml-1 '> Current Wallet : {GetAccount()}</label>
      <label className='text-black font-bold font-mono text-[20px] p-3 w-[fit-content] mt-4 ml-1 '>Balance: {GetBalance()}</label>
      <br/>
      </div> 
      <br/>
      <ShowCount/>
      <IncCount/>
      <DecCount/>
    </div>
  );
}

export default App;
