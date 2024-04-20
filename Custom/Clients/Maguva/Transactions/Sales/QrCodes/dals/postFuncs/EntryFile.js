import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/AsIs.js';

let postFunc = ({ inPostBody }) => {
    let LocalFromLowDb = StartFuncWriteTofile({
        inDataToInsert: inPostBody
    });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};

export { postFunc };