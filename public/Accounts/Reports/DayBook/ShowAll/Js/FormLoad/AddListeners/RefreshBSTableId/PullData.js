import { StartFunc as StartFuncOpenings } from "./Openings/FetchFunc.js";
import { StartFunc as StartFuncReceipts } from "./Receipts/FetchFunc.js";
import { StartFunc as StartFuncPayments } from "./Payments/FetchFunc.js";

let StartFunc = async () => {
    let jVarLocalOpenings = await StartFuncOpenings();
    let jVarLocalReceipts = await StartFuncReceipts();
    let jVarLocalPayments = await StartFuncPayments();

    const mergeResult = [...jVarLocalOpenings, ...jVarLocalReceipts, ...jVarLocalPayments];

    return mergeResult;
};

export { StartFunc }