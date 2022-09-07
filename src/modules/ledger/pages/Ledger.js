import { LedgerCard } from "../components/LedgerCard";
import { AddTransaction } from "../components/AddTransaction";
import { Grid } from "@mui/material";
import { Members } from "../../members/Members";
import { Box } from "@mui/system";
import { BalanceOutput, BalancesCalc } from "../../balances/domain/repository/balances";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";

export const Ledger = () => {
    let groupName = useParams();
    groupName = groupName.groupName;
    const [value, setValue] = useState(0);

    return <>
    {/* {console.log(groupName)} */}
        <Grid container>
            <Grid item md={12} sm={12}>
                <AddTransaction group_name={groupName}/>
                <br/>
            </Grid>
            <Box sx={{flexGrow:1}}>
            <Grid container spacing={{ xs:0, md: 0}} columns={{ xs: 6, sm: 12, md: 6 }}>
            <Grid item xs={6} md={3} sm={12}>
            <Members group_name={groupName} />
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <LedgerCard group_name={groupName}/>
            </Grid>
            </Grid>
            </Box>     
            <Grid item md={12} sm={12}>
                <BalancesCalc group_name={groupName}/>
            </Grid>
        </Grid>
        <br/>

        
        
    </>
}