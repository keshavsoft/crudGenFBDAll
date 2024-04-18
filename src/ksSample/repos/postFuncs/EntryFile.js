import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal,
    PostWithKeysCheckFunc as PostWithKeysCheckFuncDal,
    PostFuncGenUuId as PostFuncGenUuIdDal, PostFilterFunc as PostFilterFuncDal
} from '../../dals/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForSequelize,
    PostUploadFromModalFunc as PostUploadFromModalFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import ConfigJson from '../../../Config.json' assert {type: 'json'};

let PostFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    return PostFuncDal(inPostBody);
};

let PostFuncGenUuId = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    return PostFuncGenUuIdDal(inPostBody);
};

let PostFilterFunc = async ({ inFilterCondition }) => {
    return PostFilterFuncDal({ inFilterCondition });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return await PostUploadFromModalFuncDalsForSequelize(inPostBody);
    };

    return PostUploadFromModalFuncDal(inPostBody);
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

let PostWithKeysCheckFunc = async (inModalObject) => {
    return PostWithKeysCheckFuncDal({ inBodyKeys: inModalObject });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,
    PostUploadFromModalFunc, PostFilterFunc,
    PostWithKeysCheckFunc, PostFuncGenUuId
};