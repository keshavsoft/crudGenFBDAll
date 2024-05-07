let StartFunc = async () => {
    let jVarLocalProductName = jFLocalProductName();
    let jVarLocalGrossAmount = jFLocalGrossAmountId();

    if (jVarLocalProductName === "") {
        return false;
    };

    if (parseInt(jVarLocalGrossAmount) > 0 === false) {
        return false;
    };


    return true;
};

let jFLocalProductName = () => {
    let jVarLocalQrCode = 'ProductNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalGrossAmountId = () => {
    let jVarLocalGrossAmountId = 'GrossAmountId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalGrossAmountId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }