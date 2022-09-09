import { API_CLIENT } from "../../../../shared/services/api-client";

export const BALANCES = {

    async getMembers(group_name){
        try{
			const URL = process.env.REACT_APP_LEDGER_URL + group_name + '/member';
			//console.log(URL);
			const result = await API_CLIENT.post(URL);
			if(result){
				//const members = result.data.members; 
				//console.log(members);
                return (result);
			}
		}catch(err){
			console.log('Error in Member Call ', err);
		}
    },

    async getTransactions(group_name){
        const transactionObject = {'name':group_name};

        try{
            const URL = process.env.REACT_APP_LEDGER_URL + 'ledger/' + group_name + '/data';
            
            const result = await API_CLIENT.post(URL, transactionObject);
            if(result){
                const transactions = result.data.transactions;
                //console.log(transactions);
                return(transactions);
            }
            
        }catch(err){
            console.log('Error in transaction Call ', err);
        }
    }

}