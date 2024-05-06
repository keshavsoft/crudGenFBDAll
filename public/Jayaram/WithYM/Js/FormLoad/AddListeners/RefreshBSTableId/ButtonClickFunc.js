import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = async () => {
    jFLocalHideSpinner();
    let jVarLocalFetchData = await StartFuncGetFetch();
    var $table = $('#table');
    // $table.bootstrapTable();
    $table.bootstrapTable("load", jFLocalTransformData({ inData: jVarLocalFetchData }));
};
let jFLocalTransformData = ({ inData }) => {
    let jVarLocalAfterYear  = jFLocalInsertYear({ inData });
    let jVarLocalAfterMonth = jFLocalInsertMonth({ inData: jVarLocalAfterYear });
    let jVarLocalAfterDay  = jFLocalInsertDay({ inData: jVarLocalAfterMonth });
    return jVarLocalAfterDay;  
};

let jFLocalInsertYear = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Year = element.da.substring(0, 4);

        return element;
    });

    return jVarLocalReturnArray;
};
let jFLocalInsertMonth = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Month = element.da.substring(5, 7);

        return element;
    });

    return jVarLocalReturnArray;
};
let jFLocalInsertDay = ({ inData }) => {
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