import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let date=document.getElementById("DateId").value;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/bin/Accounts/FilterData/da/${date}`;
    //let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };

