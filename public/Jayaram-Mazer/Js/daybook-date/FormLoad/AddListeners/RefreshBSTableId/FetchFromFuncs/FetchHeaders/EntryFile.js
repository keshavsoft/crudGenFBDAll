import KeysJson from './Keys.json'assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBody = {};
    let jVarLocalDate = new Date(document.getElementById("DateId").value);

    let formattedDate = jVarLocalDate.toISOString().substring(0, 10);

    jVarLocalBody.FilterCondition = `e.da.substring(0,10) == "${formattedDate}"`;

    KeysJson.body = JSON.stringify(jVarLocalBody);

    return KeysJson;
};

export { StartFunc };
