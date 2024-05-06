import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = async () => {
    jFLocalHideSpinner();
    let jVarLocalFetchData = await StartFuncGetFetch();
    var $table = $('#table');
    // $table.bootstrapTable();
    $table.bootstrapTable("load", jFLocalInsertYear({ inData: jVarLocalFetchData }));
};

let jFLocalInsertYear = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.Year = element.da.substring(0, 4);

        return element;
    });

    return jVarLocalReturnArray;
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };