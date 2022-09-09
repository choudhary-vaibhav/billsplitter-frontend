import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CircularProgress, FormControl } from '@mui/material';
import { useState, useRef } from "react";
import { API_CLIENT } from '../../shared/services/api-client';
import { Navigate } from "react-router-dom";

export const CreateGroup = () => {
	const [groupName, setGroupName] = useState('');
    const group = useRef('');
	const pwd = useRef('');
    const [msg, setMsg] = useState('');
	const [load, setLoad] = useState(false);

	const validation = () => {
		const pwdValue = pwd.current.value;
		const groupValue = group.current.value;
		if(pwdValue.length <8){
			window.alert('Password must be of atleast 8 characters!');
		}else if(groupValue.length <3){
			window.alert('Group Name must be of atleast 3 characters!');
		}
		else{
			doRegister();
		}
	}

    const doRegister = async ()=>{
		setLoad(true);
        const group_Name = group.current.value;
        const password= pwd.current.value;

        const groupObject = {'name':group_Name, 'password':password};
        //console.log('groupObject is ', groupObject);
        try{
        const result = await API_CLIENT.post(process.env.REACT_APP_CREATE_URL, groupObject); 
           
            //console.log(result);
            setMsg(result.data.message);
			setGroupName(group_Name);

			//if(result)
            //console.log(result.data.group_name);
    }
        catch(err){
            //console.log('Error in Login Call ', err);
			window.alert('Either group already exists or there is server error!')
			setLoad(false);
        }
    }

    const cardWidth = {
        width: '70vw',
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
						<h1>Create a New Group</h1>
						<TextField
							required
							inputRef={group}
							id="outlined-basic"
							label="Group Name"
							variant="outlined"
						/>
						<br />
						<TextField
							required
							inputRef={pwd}
							id="outlined-basic"
							type="password"
							label="Password"
							variant="outlined"
						/>
						<br />
						
						<Button onClick={validation} variant="contained">
							REGISTER
						</Button>
						{load  ? <CircularProgress className="redirecting"/> : <div></div>}
				</FormControl>
			</form>
		  </Container>

		}
      

      {/* <Link style={{textDecoration: 'none',color:"white"}} to={{pathname: `/GroupLogin`}}>
                <h2>{msg}</h2>
		</Link> */}
    </>
  );
};
