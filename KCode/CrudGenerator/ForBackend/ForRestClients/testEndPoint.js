import fs from "fs";
import path from "path";
import ConfigJson from '../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTo, inFrom, inFilesCollection }) => {
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    let LocalFolderName = "restClients/testEndPoint";
    let LocalTableName = ConfigJson.srcDetails.tableName;

    let LocalFilesCollection = inFilesCollection;

    try {
        LocalFilesCollection.forEach(LoopFile => {
            let LoopInsideFileName = path.parse(LoopFile.name).name;
            let LocalToFilePath = `${LoopInsideFileName}/${LocalFolderName}`;

            fs.cpSync(`${LocalFrom}/${LocalTableName}/${LocalFolderName}`, `${LocalTo}/${LocalToFilePath}`, {
                recursive: true,
            });
        });
    } catch (error) {
        console.log(error.message);
    };
};

export { StartFunc };