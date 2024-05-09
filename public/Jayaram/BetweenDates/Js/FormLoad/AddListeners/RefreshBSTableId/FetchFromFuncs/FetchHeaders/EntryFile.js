import KeysJson from './Keys.json'assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBody = {};
    let jVarLocalDate = new Date(document.getElementById("DateId").value);
    let jVarLocalDate1 = new Date(document.getElementById("DateId1").value);

    let formattedDate = jVarLocalDate.toISOString().substring(0, 10);
    let formattedDate1 = jVarLocalDate1.toISOString().substring(0, 10);

    jVarLocalBody.FilterCondition = `e.da.substring(0,10) >= "${formattedDate}" && e.da.substring(0,10) <= "${formattedDate1}"`;

    KeysJson.body = JSON.stringify(jVarLocalBody);

    return KeysJson;
};

export { StartFunc };
