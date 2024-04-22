import { StartFunc as StartFuncReadFile } from "./ReadFile.js";

const StartFunc = ({ inPk }) => {
    let Localpk = inPk;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalInData = StartFuncReadFile();
    let LocalFindData = LocalInData.find(e => e.QrCode == Localpk);

    if (LocalFindData === undefined ) {
        LocalReturnData.KReason = " Not found in Sales Returns"
        return LocalReturnData;
    };

    LocalReturnData.KTF = true
    return LocalReturnData;
};
export { StartFunc };