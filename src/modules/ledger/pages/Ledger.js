import { LedgerCard } from "../components/LedgerCard";
import { AddTransaction } from "../components/AddTransaction";
import { Grid } from "@mui/material";
import { Members } from "../../members/Members";
import { Box } from "@mui/system";

export const Ledger = ({group_name}) => {

    return <>
    
        <Grid container>
            <Grid item md={12} sm={12}>
                <AddTransaction group_name={group_name}/>
                <br/>
            </Grid>
            <Box sx={{flexGrow:1}}>
            <Grid container spacing={{ xs:0, md: 0}} columns={{ xs: 6, sm: 12, md: 6 }}>
            <Grid item xs={6} md={3} sm={12}>
            <Members group_name={group_name} />
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <LedgerCard group_name={group_name}/>
            </Grid>
            </Grid>
            </Box>     
            
        </Grid>
        
    </>
}