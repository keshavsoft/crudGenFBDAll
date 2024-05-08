import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBody={};
    let jVarLocalForm = document.getElementById("DateId").value;
    let jVarLocalDate=new Date(jVarLocalForm).toLocaleDateString();
    console.log("date local:",jVarLocalDate);
    jVarLocalBody.FilterCondition=`new Date(e.da).toLocaleDateString()=='jV'`;
    KeysJson.body = JSON.stringify(jVarLocalBody);

    return KeysJson;
};

export { StartFunc }