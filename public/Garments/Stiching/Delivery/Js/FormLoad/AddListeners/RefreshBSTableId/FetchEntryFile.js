import { StartFunc as StartFuncBillsStiching } from "./ItemDetails/5-FetchFunc.js";
import { StartFunc as StartFuncDeliveryStiching } from "./DeliveryStiching/5-FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    const [BillsStiching, DeliveryStiching] = await Promise.all([StartFuncBillsStiching(), StartFuncDeliveryStiching()]);
    await StartFuncAfterFetch({ BillsStiching, DeliveryStiching });

    return await BillsStiching;
};

export { StartFunc };