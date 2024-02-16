import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";
import { StartFunc as StartFuncForSequelize } from "./ForSequelize/EntryFile.js";

import ConfigJson from '../../Config.json' assert {type: 'json'};
import fs from "fs";

let StartFunc = () => {
    LocalFuncCreateFolder();

    if (ConfigJson.isSequelize) {
        StartFuncForSequelize();
        return;
    };

    StartFuncForFlatJson();
};

let LocalFuncCreateFolder = () => {
    try {
        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};

StartFunc();
