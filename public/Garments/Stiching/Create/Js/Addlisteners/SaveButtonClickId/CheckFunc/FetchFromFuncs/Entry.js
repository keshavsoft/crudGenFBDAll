import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    return jVarLocalDataNeeded;
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            // StartFuncAfterFetch();
        };
    };
};

export { StartFunc }