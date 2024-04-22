import { StartFunc as StartFuncReadFile } from "./ReadFile.js";
import { StartFunc as StartFuncSalesReturns } from "../SalesReturns/EntryFile.js";

const StartFunc = ({ inPk }) => {
    let Localpk = inPk;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalInData = StartFuncReadFile();
    let LocalFindData = LocalInData.find(e => e.pk == Localpk);

    if (LocalFindData === undefined === false) {
        let LocalSalesReturns = StartFuncSalesReturns({ inPk: Localpk });

        if (LocalSalesReturns.KTF === false) {
            LocalReturnData.KReason = LocalSalesReturns.KReason;
            return LocalReturnData;
        };

        if (LocalSalesReturns.KTF) {
            LocalReturnData.KTF = true
            return LocalReturnData;
        };

        LocalReturnData.KReason = "found in Sales"
        return LocalReturnData;
    };

    LocalReturnData.KTF = true
    return LocalReturnData;
};
export { StartFunc };