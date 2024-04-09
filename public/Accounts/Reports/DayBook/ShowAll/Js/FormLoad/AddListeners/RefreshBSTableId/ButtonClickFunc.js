import { StartFunc as StartFuncPullData } from "./PullData.js";

let StartFunc = async () => {
    jFLocalHideSpinner();
    let jVarLocalDataAsArray = await StartFuncPullData();
    console.log("jVarLocalDataAsArray : ", jVarLocalDataAsArray);
    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalDataAsArray
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }