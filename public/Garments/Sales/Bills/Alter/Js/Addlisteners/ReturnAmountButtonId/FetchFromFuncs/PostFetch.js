import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let LocalRowId = jFLocalReturnVoucherId();

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/SalesReturns/${LocalRowId}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let jFLocalReturnVoucherId = () => {
    let jVarLocalReturnVoucherId = 'ReturnVoucherId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalReturnVoucherId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };

