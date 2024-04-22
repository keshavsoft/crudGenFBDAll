import { postFunc as postFuncFromDal } from '../../dals/postFuncs/EntryFile.js';

let postFunc = async ({ inPostBody }) => {
    return postFuncFromDal({ inPostBody });
};

export { postFunc };