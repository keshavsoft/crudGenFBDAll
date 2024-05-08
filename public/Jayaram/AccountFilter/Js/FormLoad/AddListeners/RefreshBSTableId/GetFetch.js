let StartFunc = async () => {
    //let jVarLocalFetchUrl = "/bin/Accounts/DataOnly";
    let Account=document.getElementById("AccountId").value;
    //console.log("date:",date);
    let jVarLocalFetchUrl = `/bin/Accounts/FilterData/nam/${Account}`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    return jVarLocalFromResponse;
};

export { StartFunc };
