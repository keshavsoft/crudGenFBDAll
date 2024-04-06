// import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as StartFuncUpdateRow } from '../../kLowDb/WriteFile/Update/UpdateRow/EntryFile.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateRow({ inDataToUpdate, inId });
};

export {
    PutFunc
};