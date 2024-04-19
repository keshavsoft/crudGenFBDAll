let StartFunc = async () => {
    // let jVarLocalFetchUrl = `/bin/Accounts/DataOnly`;
    // let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();
    // localStorage.setItem("AccountNames", JSON.stringify(data));
    jFLocalToDataList();
};

let jFLocalToDataList = () => {
let jVarLocalSalesRef = getUrlQueryParams({ inGetKey: "SalesRef" });

    let jVarLocalAccountNamesDataListId = document.getElementById("SalesRef");
    jVarLocalAccountNamesDataListId.value = jVarLocalSalesRef;

};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };