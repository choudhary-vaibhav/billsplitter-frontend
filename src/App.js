import './App.css';
import { GROUP } from './modules/group/Group';
import { Homepage } from './modules/homepage/Homepage';
import { Ledger } from './modules/ledger/pages/Ledger';
import { Navbar } from './shared/widgets/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <br />
      <div className='page'>
        <Ledger group_name="awesome"></Ledger>
        {/* <Homepage/>
        <GROUP/> */}
      </div>
      
    </>
  );
}

export default App;
