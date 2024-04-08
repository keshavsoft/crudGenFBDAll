import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {

    KeysJson.body = JSON.stringify(inBodyData);

    return KeysJson;
};

export { StartFunc }