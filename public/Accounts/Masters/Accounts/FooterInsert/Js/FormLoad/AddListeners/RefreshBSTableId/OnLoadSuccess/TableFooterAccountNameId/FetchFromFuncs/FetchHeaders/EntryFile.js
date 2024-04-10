import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(jFLocalPrepareBody());

    return KeysJson;
};

let jFLocalPrepareBody = () => {
    return {
        "AccountName": LocalFuncForjVarLocalTableFooterAccountNameId()
    }
};
let LocalFuncForjVarLocalTableFooterAccountNameId = () => {
    let jVarLocalTableFooterAccountNameId = document.getElementById('TableFooterAccountNameId');

    if (jVarLocalTableFooterAccountNameId === null === false) {
        return jVarLocalTableFooterAccountNameId.value.trim();
    };
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(value);
        } else {
            serializedData[name] = value;
        }
    }

    return serializedData;
};

export { StartFunc }