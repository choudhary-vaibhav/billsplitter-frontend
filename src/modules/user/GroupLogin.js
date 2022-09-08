import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl,Typography } from '@mui/material';
import { useRef, useState, useContext, createContext } from 'react';
import { API_CLIENT } from '../../shared/services/api-client';
import { Link, Navigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const GroupLogin = () => {
		const [groupName, setGroupName] = useState('');
		const [msg,setMsg] =useState('');
		const [logged, setLogged] = useState('false');
		const group = useRef('');
		const pwd = useRef('');

		const doLogin = async ()=>{
			const group_Name = group.current.value;
			const password= pwd.current.value;

			const groupObject = {'name':group_Name, 'password':password};
			console.log('groupObject is ', groupObject);
			try{
			const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN_URL, groupObject); 
			   
				setMsg(result.data.message);
				//setLoggedOut(false);
				console.log(result.data.message);
				//console.log(result.data.group_name);
			   	setGroupName(result.data.group_name);	
				//console.log(groupName);
				setLogged(true);
			}
			catch(err){
				console.log('Error in Login Call ', err);
			}
		}

    const cardWidth = {
        width: '75vw',
        '@media (min-width: 720px)' : {
          width: '50vw'
        },
		'@media (min-width: 600px && max-width: 720px)' : {
			width: '75vw'
		  }
      }
  return (
    <>
		{msg?
		<Navigate replace to={{pathname: `/Ledger/${groupName}`}}></Navigate>		
		:
		
		<Container>
		<form autoComplete='off'>
			<FormControl sx={{width:cardWidth, display:"flex", m:5}}>
					<h1>Login into Group</h1>
					{/* <h3>{msg}</h3> */}
					<TextField
						inputRef={group}
						id="outlined-basic"
						label="Group Name"
						variant="outlined"
					/>
					<br />
					<TextField
						inputRef={pwd}
						id="outlined-basic"
						type="password"
						label="Password"
						variant="outlined"
					/>
					<br />
					<Button onClick={doLogin} variant="contained">
						LOGIN
					</Button>
			</FormControl>
		</form> 
		</Container>
		

		}
    </>
  );
};
