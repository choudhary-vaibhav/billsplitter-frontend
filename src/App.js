import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './modules/homepage/Homepage';
import { Ledger } from './modules/ledger/pages/Ledger';
import { Members } from './modules/members/Members';
import { CreateGroup } from './modules/user/CreateGroup';
import { GroupLogin } from './modules/user/GroupLogin';
import { Navbar } from './shared/widgets/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element = { <Homepage/> } exact />
        <Route path='/CreateGroup' element = { <CreateGroup/> } exact />
        <Route path='/GroupLogin' element = { <GroupLogin/> } exact />
        <Route path='/Ledger/:groupName' element = { <Ledger /> }/>
      </Routes>
      <br />
      {/* <div className='page'>
        <Ledger group_name="awesome"></Ledger>
        <Homepage/>
        <GROUP/>
      </div> */}
      {/* <Members group_name="awesome"/> */}
      {/* <GroupLogin/>
      <br/>
      <CreateGroup/> */}

      {/* <Ledger group_name='awesome'/> */}
      
    </>
  );
}

export default App;
