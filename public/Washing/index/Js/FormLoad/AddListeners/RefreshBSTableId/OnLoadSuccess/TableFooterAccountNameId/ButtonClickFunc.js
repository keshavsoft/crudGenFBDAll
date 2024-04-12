import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = () => {
    // if (StartFuncCheckFunc()) {
    //     StartFuncFetchFromFuncs().then();
    // };
    console.log("aaaaaaaaaaaaaaaaaaa");
    var $table = $('#table');

    $table.bootstrapTable('insertRow', {
        index: 1,
        row: jFLocalGetNewRowData()
    });
};

let jFLocalGetNewRowData = () => {
    let jVarLocalItemName = LocalFuncForjVarLocalTableFooterItemNameId();
    let jVarLocalItemRate = jFLocalTableFooterRateInputId();

    return {
        "ItemName": jVarLocalItemName,
        "ItemRate": jVarLocalItemRate
    };
};

let LocalFuncForjVarLocalTableFooterItemNameId = () => {
    let jVarLocalTableFooterItemNameId = 'TableFooterItemNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterRateInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterRateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }