import { StartFunc as StartFuncGetFetch } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    jFLocalShowSpinner();
    let jVarLocalFetchData = await StartFuncGetFetch();
    var $table = $('#table');

    const costPerPersonUsd = pipe(jFLocalInsertYear, jFLocalInsertMonth, jFLocalInsertDay, jFLocalInsertCredit, jFLocalInsertDebit, jFLocalBalance);

    $table.bootstrapTable("load", costPerPersonUsd(jVarLocalFetchData));
    jFLocalHideSpinner();
};
const _pipe = (a, b) => (arg) => b(a(arg));

// Refactored
const pipe = (...ops) => ops.reduce(_pipe);

let jFLocalInsertYear = (inData) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Year = element.da.substring(0, 4);

        return element;
    });

    return jVarLocalReturnArray;
};
let jFLocalInsertMonth = (inData) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Month = element.da.substring(5, 7);

        return element;
    });

    return jVarLocalReturnArray;
};
let jFLocalInsertDay = (inData) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Day = element.da.substring(8, 10);

        return element;
    });

    return jVarLocalReturnArray;
}

let jFLocalInsertDebit = (inData) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        if (element.amt < 0) {
            element.Debit = element.amt * -1;
        }
        // else{
        //     element.Debit="" 
        // }

        return element;
    });

    return jVarLocalReturnArray;
}

let jFLocalInsertCredit = (inData) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        if (element.amt > 0) {
            element.Credit = element.amt;
        }
        // else{
        //     element.Credit="" 
        // }

        return element;
    });

    return jVarLocalReturnArray;
}


    let jFLocalBalance = (inData) => {
        let jVarLocalReturnArray = [];
        let previousBalance = 0;
    
        jVarLocalReturnArray = inData.map(element => {
            const debit = isNaN(element.Debit) ? 0 : element.Debit;
            const credit = isNaN(element.Credit) ? 0 : element.Credit;
            
            let balance = previousBalance + debit - credit;
            previousBalance = balance;
    
            balance = parseFloat(balance.toFixed(4));
    
            element.Balance = balance;
            return element;
        });
    
        return jVarLocalReturnArray;
    }
    
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "inline-block";
};
export { StartFunc };