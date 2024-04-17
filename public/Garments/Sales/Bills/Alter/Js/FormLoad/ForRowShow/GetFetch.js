import { StartFunc as StartFuncShowToDom } from "./ShowToDom.js";

let StartFunc = async () => {
    let LocalRowPk = getUrlQueryParams({ inGetKey: "RowPK" });
    let jVarLocalFetchUrl = `/bin/Bills2425/${LocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    StartFuncShowToDom({ inDataToShow: data.JsonData });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };