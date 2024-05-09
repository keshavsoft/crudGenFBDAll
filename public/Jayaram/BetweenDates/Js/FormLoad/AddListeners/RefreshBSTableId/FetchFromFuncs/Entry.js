import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    return await StartFuncFetchFuncs();
};

export { StartFunc }