let StartFunc = ({ inDataToShow }) => {
    let data = inDataToShow;
    console.log("data  : ", data);
    jFLocalToInputBillNumberId(data.BillNumber2425);
};

let jFLocalToInputBillNumberId = (inValue) => {
    let jVarLocalHtmlId = 'BillNumberId';
    let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumberId === null === false) {
        jVarLocalBillNumberId.value = inValue;
    };
};

export { StartFunc };