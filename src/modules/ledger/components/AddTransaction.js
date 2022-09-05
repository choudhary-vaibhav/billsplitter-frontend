import { API_CLIENT } from '../../../shared/services/api-client';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, Typography } from "@mui/material";
import { useRef } from "react";

export const AddTransaction = ({group_name}) => {

    const desc = useRef('');
    const payed_by = useRef('');
    const expense = useRef('');

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
            }
        }catch(err){
            console.log('Error in adding transaction ', err);
        }
    }

  return (
    <>
            <Container>
            <form autocomplete="off">
                <FormControl>
                <Typography sx={{fontWeight:"bold",m:1}} variant="h5">
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
                <TextField
                    inputRef={payed_by}
                    required
                    type="text"
                    id="payer"
                    label="Payed by"
                    variant="outlined"
                />
                    <Button type="submit" onClick={addTransaction} variant="contained">ADD</Button>
                </FormControl> 
            </form>   
        </Container>
      
    </>
  );
};
