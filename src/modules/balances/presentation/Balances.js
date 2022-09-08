import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/system";
import Typography from '@mui/material/Typography';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button, Grid, TableCell, TableContainer, TableRow } from "@mui/material";

export const BalanceOutput = ({balancesArray}) => {

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
            
        <Container sx={{width: cardWidth, display:"flex"}}>
            {/* <h2 style="text-align:center">Balances</h2> */}
			<Box sx={{ width:"400px", bgcolor: "#1C6DD0", borderRadius:"10px", color:"white" }}>
            <Typography sx={{fontWeight:"bold",m:1,mt:2, flexGrow:1, textAlign:"center"}} variant="h4">
                    Balances
                </Typography>
                    <TableContainer sx={{mx:6,mb:3}}>
                    {	balancesArray.map(balanceObj => {

                        const payer = balanceObj['payer'];
                        const payee = balanceObj['payee'];
                        const amount = balanceObj['amount'].toFixed(2);

                        return (
                                <TableRow>
                                    <TableCell>
                                        {payer}
                                    </TableCell>
                                    <TableCell>
                                    <Button variant="contained" startIcon={<DoubleArrowIcon/>} endIcon={<DoubleArrowIcon />}>
                                    <CurrencyRupeeIcon fontSize="5"/>{amount}
                                    </Button>
                                    </TableCell>
                                    <TableCell>
                                        {payee}
                                    </TableCell>
                                </TableRow>
                                    
                            
                        
                        )
                        })
                        }
                    </TableContainer>

			</Box>
		</Container>
    </>
}