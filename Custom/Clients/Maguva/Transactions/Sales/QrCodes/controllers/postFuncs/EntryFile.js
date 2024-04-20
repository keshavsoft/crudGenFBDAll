import { postFunc as postFuncFromRepo } from '../../repos/postFuncs/EntryFile.js';

let postFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await postFuncFromRepo({
        inPostBody: LocalBody
    });

    res.json(LocalFromRepo);
};

export { postFunc };