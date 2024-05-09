// import { StartFunc as StartFuncBSTableLoad } from "./BSTableLoad.js";
import { StartFunc as StartFuncFetchFuncs } from "./Fetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    // jFLocalHideSpinner();

    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded !== null) {
        StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    };
};

// let jFLocalHideSpinner = () => {
//     let jVarLocalSpinnerId = document.getElementById("SpinnerId");
//     jVarLocalSpinnerId.style.display = "none";
// };

export { StartFunc }