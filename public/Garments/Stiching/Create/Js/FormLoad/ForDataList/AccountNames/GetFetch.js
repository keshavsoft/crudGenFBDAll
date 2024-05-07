let StartFunc = async () => {
    let LocalUrl = `/bin/StichingPOS/MaxRow`
    let localfetch = await fetch(LocalUrl);
    let data = await localfetch.json();
    let jVarLocalSalesRef = data.pk;

    let jVarLocalAccountNamesDataListId = document.getElementById("FK");
    jVarLocalAccountNamesDataListId.value = jVarLocalSalesRef;
};

export { StartFunc };