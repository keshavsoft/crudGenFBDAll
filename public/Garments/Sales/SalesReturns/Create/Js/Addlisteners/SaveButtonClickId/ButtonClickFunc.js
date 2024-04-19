import { StartFunc as StartFuncCheckFunc } from "./CheckFunc/EntryFile.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = await StartFuncCheckFunc();
    console.log("jVarLocalFromCheck : ", jVarLocalFromCheck);
    if (jVarLocalFromCheck) {
        // StartFuncFetchFromFuncs().then();
    };
};

export { StartFunc };
