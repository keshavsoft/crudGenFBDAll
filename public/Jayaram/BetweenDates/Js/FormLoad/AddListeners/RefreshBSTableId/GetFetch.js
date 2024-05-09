let StartFunc = async () => {
    //let jVarLocalFetchUrl = "/bin/Accounts/DataOnly";
    let date=document.getElementById("DateId").value;
    console.log("date:",date);
    let jVarLocalFetchUrl = `/bin/Accounts/FilterData/da/${date}`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    return jVarLocalFromResponse;
};

export { StartFunc };
