import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl,Typography } from '@mui/material';
import { useEffect, useState, useRef } from "react";
import { API_CLIENT } from '../../shared/services/api-client';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const CreateGroup = () => {

    const group = useRef('');
	const pwd = useRef('');

    const doRegister = async ()=>{
        const groupName = group.current.value;
        const password= pwd.current.value;

        const groupObject = {'name':groupName, 'password':password};
        console.log('groupObject is ', groupObject);
        try{
        const result = await API_CLIENT.post(process.env.REACT_APP_CREATE_URL, groupObject); 
           
        
        if(result){
            // setMsg(result.data.message);
            console.log(result.data.message);
            console.log(result.data.group_name);
        } 
    }
        catch(err){
            console.log('Error in Login Call ', err);
        }
    }

    const cardWidth = {
        width: '100vw',
        '@media (min-width: 720px)' : {
          width: '50vw'
        },
		'@media (min-width: 600px && max-width: 720px)' : {
			width: '75vw'
		  }
      }

  return (
    <>
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
                    <Button onClick={doRegister} variant="contained">
                        REGISTER
                    </Button>
            </FormControl>
        </form> 
      </Container>
    </>
  );
};
