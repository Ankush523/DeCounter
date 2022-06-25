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
      <label className='text-[20px] mt-4 text-black '> Current Wallet : {GetAccount()}</label>
      <br/>
      <label className='text-[20px] mt-6 text-blue '>Balance: {GetBalance()}</label>
      <br/>
      <ShowCount/>
      <IncCount/>
      <DecCount/>
    </div>
  );
}

export default App;
