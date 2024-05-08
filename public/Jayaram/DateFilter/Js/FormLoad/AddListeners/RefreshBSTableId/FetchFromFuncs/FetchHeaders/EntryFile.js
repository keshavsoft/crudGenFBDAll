import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBody = {};
    let jVarLocalDate = document.getElementById("DateId").value;
    jVarLocalBody.FilterCondition = `e.da.substring(0,10)==='${jVarLocalDate}'`;
    KeysJson.body = JSON.stringify(jVarLocalBody);

    return KeysJson;
};

export { StartFunc }