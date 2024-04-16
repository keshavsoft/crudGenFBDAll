let StartFunc = async () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalUrl = `/bin/BillsQrCode/${jVarLocalQrCode}`;
    const response = await fetch(jVarLocalUrl);
    console.log("response : ", response);
    return false;
};

let jFLocalQrCode = () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }