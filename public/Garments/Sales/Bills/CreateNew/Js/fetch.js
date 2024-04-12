const StartFunc = async () => {
    let LocalBillNo = await jFLocalFetch();
    let jVarLocalHtmlId = 'BillNumber';
    let jVarLocalBillNumber = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumber === null === false) {
        jVarLocalBillNumber.value = LocalBillNo + 1;
    };
};

const jFLocalFetch = async () => {

    let responce = await fetch("/bin/Bills2425/Max/BillNumber");
    let data = await responce.json();
    return await data;


};

export { StartFunc };