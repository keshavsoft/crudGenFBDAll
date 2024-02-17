import fs from "fs";

let StartFunc = ({ inTo, inFrom }) => {
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    let LocalFolderName = "restClients/testEndPoint";

    let LocalFilePath = `${LoopInsideFileName}/${LocalFolderName}`;
    fs.cpSync(`${LocalFrom}/${LocalFilePath}`, `${LocalTo}/${LocalFilePath}`);
};

export { StartFunc };