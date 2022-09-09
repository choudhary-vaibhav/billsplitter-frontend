export const BalanceOperation = {

    group_name : 'awesome',
    transactions : [],
    members : [],

    totalExpense(){
        let sum = 0;
        this.transactions.forEach(transaction => {
                sum += transaction['payment']; 
        })
        return sum;
    },

    memberCount(){
        return this.members.length;
    },

    memberExpense(){
        const memberExpObject = {};
        this.members.forEach(member => {

            memberExpObject[member] = 0;
            this.transactions.forEach(transaction => {
                if(member === transaction['payer']){
                    memberExpObject[member] += transaction['payment'];                    
                }
            })
            
        });

        return memberExpObject;
    },

    highestMemberExpense(){
        const memberExpObject = this.memberExpense();
        const values = Object.values(memberExpObject);
        return Math.max(values);
    },

    memberCredit(){
        const memberCreditObj = {};
        const memberExpObject = this.memberExpense();
        let perShare = this.totalExpense()/this.memberCount();
        perShare = perShare.toFixed(2);
        
        this.members.forEach(member => {
            memberCreditObj[member] = perShare - memberExpObject[member];
        })

        return memberCreditObj;
    }
}