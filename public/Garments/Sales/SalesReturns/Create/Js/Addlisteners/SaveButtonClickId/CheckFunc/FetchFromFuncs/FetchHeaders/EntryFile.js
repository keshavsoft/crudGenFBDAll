import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body.FilterCondition = `e.pk==='${jFLocalQrCode()}' && e.BillPk==='${jFLocalSRRefId()}'`;
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalSRRefId = () => {
    let jVarLocalSRRefId = 'SRRefId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSRRefId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalQrCode = () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }