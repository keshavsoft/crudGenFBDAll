import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("RefreshBSTableId");
    let jVarLocalShowButtonId=document.getElementById("ShowButtonId");
    let jVarLocalAccountId=document.getElementById("AccountId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncButtonClickFunc);
    };

    if (jVarLocalShowButtonId === null === false) {
        jVarLocalShowButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };

    /* if (jVarLocalAccountId === null === false) {
        jVarLocalAccountId.addEventListener("click", StartFuncButtonClickFunc2);
    }; */
};


export { StartFunc };