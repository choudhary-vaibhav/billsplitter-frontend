import './App.css';
import { GROUP } from './modules/group/Group';
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
      <br />
      {/* <div className='page'>
        <Ledger group_name="awesome"></Ledger>
        <Homepage/>
        <GROUP/>
      </div> */}
      {/* <Members group_name="awesome"/> */}
      <GroupLogin/>
      <CreateGroup/>

      <Ledger group_name='awesome'/>
      
    </>
  );
}

export default App;
