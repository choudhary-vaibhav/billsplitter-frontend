import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { BalanceOperation } from "../models/balanceOperations";
import { BALANCES } from "../models/balances";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { BalanceOutput } from "../../presentation/Balances";

export const BalancesCalc = ({group_name}) => {

    const [isBalanceCalc, setIsBalanceCalc] = useState(false);
    const [balancesArray, setBalancesArray] = useState([]); 

    const balanceArray = [];
    const payerObj = {};
    const payeeObj = {};

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
                payerObj[key]=memberCreditObj[key];
                //console.log(key + ' owes ' + memberCreditObj[key]);
            }else if(memberCreditObj[key]<0){
                //console.log(key + ' recieves ' + Math.abs(memberCreditObj[key]));
                payeeObj[key]=memberCreditObj[key];
            }
        }
        //console.log(payerObj);
        //console.log(payeeObj);
        calcBalances();
    //console.log(BalanceOperation.transactions);
    //console.log(BalanceOperation.members);
    }

    const calcBalances = () => {

        const payeeEntries = Object.entries(payeeObj);
        const payerEntries = Object.entries(payerObj);

        const payerObjLen = payerEntries.length;
        const payeeObjLen = payeeEntries.length;

        let i=0;
        let j=0;

        while(i<payerObjLen && j<payeeObjLen){

            const tempBalanceObj = {};
            tempBalanceObj['payer']=payerEntries[i][0];
            tempBalanceObj['payee']=payeeEntries[j][0];

            const amount = payerEntries[i][1]+payeeEntries[j][1];

            if(amount == 0){
                tempBalanceObj['amount'] = amount;
                i++;
                j++;
            }else if(amount > 0){
                tempBalanceObj['amount'] = Math.abs(payeeEntries[j][1]);
                payerEntries[i][1] = amount;
                j++;
            }else{
                tempBalanceObj['amount'] = Math.abs(payerEntries[i][1]);
                payerEntries[i][1] = amount;
                i++;
            }

            balanceArray.push(tempBalanceObj);
        }

        console.log(balanceArray);
        setBalancesArray(balanceArray);
        setIsBalanceCalc(true);

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

        {isBalanceCalc?
            <BalanceOutput balancesArray={balancesArray}/>
        :
            <div></div>
        }

    </>
}