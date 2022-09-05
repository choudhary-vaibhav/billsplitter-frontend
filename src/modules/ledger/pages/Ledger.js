import { LedgerCard } from "../components/LedgerCard";
import { AddTransaction } from "../components/AddTransaction";
import { Grid } from "@mui/material";

export const Ledger = ({group_name}) => {

    return <>
    
        <Grid container>
            <Grid item md={4} sm={12}>
                <AddTransaction group_name={group_name}/>
            </Grid>
            <Grid item md={8} sm={12}>
                <LedgerCard group_name={group_name}/>
            </Grid>
        </Grid>
        
    </>
}