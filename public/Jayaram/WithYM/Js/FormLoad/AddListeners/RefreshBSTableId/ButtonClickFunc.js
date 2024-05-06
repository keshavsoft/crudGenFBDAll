import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = async () => {
    let jVarLocalFetchData = await StartFuncGetFetch();
    var $table = $('#table');
    const costPerPersonUsd = pipe(jFLocalInsertYear, jFLocalInsertMonth, jFLocalInsertDay);
    // $table.bootstrapTable();
    $table.bootstrapTable("load", costPerPersonUsd( jVarLocalFetchData ));
    jFLocalHideSpinner();
};
const _pipe = (a, b) => (arg) => b(a(arg));

// Refactored
const pipe = (...ops) => ops.reduce(_pipe);

let jFLocalInsertYear = ( inData ) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Year = element.da.substring(0, 4);

        return element;
    });

    return jVarLocalReturnArray;
};
let jFLocalInsertMonth = ( inData ) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Month = element.da.substring(5, 7);

        return element;
    });

    return jVarLocalReturnArray;
};
let jFLocalInsertDay = ( inData ) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Day = element.da.substring(8, 10);

        return element;
    });

    return jVarLocalReturnArray;
}

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };