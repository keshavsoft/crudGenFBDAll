import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body.FilterCondition = "";

    return KeysJson;
};

export { StartFunc }