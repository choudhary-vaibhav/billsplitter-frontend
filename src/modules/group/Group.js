import { Members } from "../members/Members";
import { Navbar } from "../../shared/widgets/Navbar";
import { Expensetracker } from "../../shared/widgets/Expense-tracker";
import { Newgroup } from "../../shared/widgets/New-group";
import { Addtransaction } from "../../shared/widgets/Addtransaction";

export const GROUP =  () => {
    return(
        <>
        <Navbar/>
        <br />
        <Expensetracker/>
        <br />
        <Members/>
        <br />
        <Newgroup/>
        <br />
        <Addtransaction/>
        </>
    );
}