import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("RefreshBSTableId");
    let jVarLocalShowButtonId=document.getElementById("ShowButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncButtonClickFunc);
    };

    if (jVarLocalShowButtonId === null === false) {
        jVarLocalShowButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };