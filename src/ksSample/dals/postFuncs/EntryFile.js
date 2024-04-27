import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
// import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from '../../kLowDb/WriteFileList/writeFileFromModal.js';
import { StartFunc as StartFuncImportToFile } from '../../kLowDb/WriteFileList/ImportToFile.js';
import { StartFunc as StartFuncUploadToFile } from '../../kLowDb/WriteFileList/UploadToFile.js';
import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as StartFuncWriteFileKeysCheck } from '../../kLowDb/WriteFile/WithChecking/StartFunc.js';
import { StartFunc as StartFuncGenUuId } from '../../kLowDb/WriteFile/GenUuId.js';
import { StartFunc as StartFuncFilterAsObject } from '../../kLowDb/ReadFile/FilterAsObject.js';
import { StartFunc as StartFuncCheckGeneratePk } from '../../kLowDb/WriteFile/WithChecking/StartFuncGeneratePk.js';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostFilterFunc = ({ inFilterCondition }) => {
    return StartFuncFilterAsObject({ inFilterCondition });
};

let PostFuncGenUuId = (inPostBody) => {
    return StartFuncGenUuId({ inDataToInsert: inPostBody });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return StartFuncImportToFile({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncUploadToFile({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

let PostWithKeysCheckFunc = ({ inBodyKeys }) => {
    return StartFuncWriteFileKeysCheck({ inDataToInsert: inBodyKeys });
};

let PostWithCheckAndGenPkFunc = ({ inBodyKeys }) => {
    return StartFuncCheckGeneratePk({ inDataToInsert: inBodyKeys });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,
    PostUploadFromModalFunc, PostWithKeysCheckFunc,
    PostFuncGenUuId, PostFilterFunc,
    PostWithCheckAndGenPkFunc
};