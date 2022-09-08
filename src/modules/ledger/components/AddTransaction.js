import { API_CLIENT } from '../../../shared/services/api-client';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, Typography } from "@mui/material";
import { useEffect, useState, useRef, useContext, createContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Skeleton from '@mui/material/Skeleton';

export const AddTransaction = ({group_name}) => {

    const desc = useRef('');
    const payed_by = useRef('');
    const expense = useRef('');
    const [members, setMembers] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
		getMembers();
	},[])

    const addTransaction = async () => {
        const description = desc.current.value;
        const payer = payed_by.current.value;
        const payment = expense.current.value;

        const transactionObject = {'description':description, 'payer':payer, 'payment':payment};

        try{
            const URL = process.env.REACT_APP_LEDGER_URL + 'ledger/' + group_name + '/add';

            const result = await API_CLIENT.post(URL, transactionObject);
            if(result && result.data.message){
                console.log(result.data.message);
                window.location.reload();
            }
        }catch(err){
            console.log('Error in adding transaction ', err);
        }
    }

    const getMembers = async () => {
		try{
			const URL = process.env.REACT_APP_LEDGER_URL + group_name + '/member';
			//console.log(URL);
			const result = await API_CLIENT.post(URL);
			if(result){
				setMembers(result.data.members); 
				console.log(members);
                setLoading(false);
			}

		}catch(err){
			console.log('Error in Member Call ', err);
		}
	}

  return (
    <>
    {loading? 
            <Box>
            <br/>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <br/>
        </Box>
    : 
        <Container>
            <form autoComplete="off">
                <FormControl sx={{width:"75vw", display:"flex", m:5}}>
                <Typography sx={{fontWeight:"bold",m:1, flexGrow:1, textAlign:"center"}} variant="h5">
                    Add a Transaction
                </Typography>
                <TextField
                    inputRef={desc}
                    type="text"
                    required
                    id="desc"
                    label="Details"
                    variant="outlined"
                />
                <TextField
                    inputRef={expense}
                    type="number"
                    required
                    id="expense"
                    label="Expense"
                    variant="outlined"
                />
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Payed by *</InputLabel>
                        <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="payed by"
                        inputRef={payed_by}
                        >
                        <MenuItem disabled><em>None</em></MenuItem>
                        {   members.map(member => {
                                return (
                                    <MenuItem value ={member}>{member}</MenuItem>
                                );
                            })
                        }
                        </Select>
                    </FormControl>
                    <Button type="submit" onClick={addTransaction} variant="contained">ADD</Button>
                </FormControl> 
            </form>   
        </Container>
    
    }
            
      
    </>
  );
};
