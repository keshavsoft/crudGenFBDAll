import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";
import { StartFunc as StartFuncForSequelize } from "./sqlite/ForSequelize/CreateData.js";
import ConfigJson from '../../Config.json' assert {type: 'json'};
import fs from "fs";

let StartFunc = ({ inFilesArray, inFrom }) => {
    LocalFuncCreateFolder();

    if (ConfigJson.isSequelize) {
        StartFuncForSequelize();

        return;
    };

    StartFuncForFlatJson({
        inTablesCollection: inFilesArray,
        inFrom
    });
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

export { StartFunc };
