import * as React from 'react';
import { useEffect, useState } from "react";
import { API_CLIENT } from '../../../shared/services/api-client';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Container } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

export const LedgerCard = ({group_name}) => {

    const [transactions, setTransactions] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getData();
    },[])

    const delTransaction = async (key) => {
        console.log(key);
        const transactionObject = {'_id':key}

        try{
            const URL = process.env.REACT_APP_LEDGER_URL + 'ledger/' + group_name + '/remove';

            const result = await API_CLIENT.post(URL, transactionObject);
            if(result && result.data.message){
                console.log(result.data.message);
                setLoading(true);
                window.location.reload();
                getData();

            }
        }catch(err){
            console.log('Error in delete transaction ', err);
        }
    }

    

    const getData = async () => {
        const transactionObject = {'name':group_name};

        try{
            const URL = process.env.REACT_APP_LEDGER_URL + 'ledger/' + group_name + '/data';
            //console.log(URL);
            const result = await API_CLIENT.post(URL, transactionObject);
            if(result){
                setTransactions(result.data.transactions);
                setLoading(false);
                //console.log(transactions);
            }
            

        }catch(err){
            console.log('Error in transaction Call ', err);
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

    return <>
        
        {loading?
                <Box>
                    <br/>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                    <br/>
                </Box>
            : <>
            {/* media query for 50vw and 100vw */}
            <Container sx={{width: cardWidth, display:"flex"}}> 
            <List sx={{width: "100vw", bgcolor: "#1C6DD0", borderRadius:"10px", color:"white"}}>
                        <ListItem key="heading">
                            <Typography sx={{fontWeight:"bold"}} variant="h5">
                                Group Transactions
                            </Typography>
                        </ListItem>
                {transactions.map(transaction => {
                    const desc = transaction.description;
                    const details = 'Rs.'+ transaction.payment + ' by ' + transaction.payer;
                    const key = transaction._id;
                     return <>
                        <ListItem
                            key={key}
                            secondaryAction={
                                <IconButton onClick={event => delTransaction(key)} edge="end" aria-label="delete">
                                <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <CurrencyRupeeIcon />
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText
                                primary={desc}
                                secondary={details}
                            />
                        </ListItem>
                    </>
                    
                    })
                }
            </List>
          </Container>
          <br />
          </>
        
        }
    </>
}