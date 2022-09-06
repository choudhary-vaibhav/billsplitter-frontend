import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { BalanceOperation } from "../models/balanceOperations";
import { BALANCES } from "../models/balances";

export const BalanceOutput = ({group_name}) => {

    useEffect(()=>{
        BalanceOperation.group_name = {group_name};
        const transactionPromise = BALANCES.getTransactions(group_name);
        const memberPromise = BALANCES.getMembers(group_name);

        transactionPromise.then(response => {
            BalanceOperation.transactions = response;
        }).catch(err =>{
            console.log("Err in transaction data", err);
        });

        memberPromise.then(response => {
            BalanceOperation.members = response.data.members;
        }).catch(err => {
            console.log("Err in members data", err);
        })

    },[])
    

    const splitExpense = () =>{
        const memberCreditObj = BalanceOperation.memberCredit();
        
        for(const key in memberCreditObj){
            if(memberCreditObj[key]>0){
                console.log(key + ' owes ' + memberCreditObj[key]);
            }else if(memberCreditObj[key]<0){
                console.log(key + ' recieves ' + Math.abs(memberCreditObj[key]));
            }
        }

    //console.log(BalanceOperation.transactions);
    //console.log(BalanceOperation.members);
    }

    const buttonWidth = {
        width: '100vw',
        '@media (min-width: 720px)' : {
          width: '50vw'
        },
		'@media (min-width: 600px && max-width: 720px)' : {
			width: '75vw'
		  }
      }


    return <>
        <Container sx={{width:buttonWidth, display:"flex"}}>
            <Button sx={{width:500, fontSize: 20, m:2}} onClick={splitExpense} size="large" variant="contained" color="success">
                CALCULATE
            </Button>
        </Container>

    </>
}