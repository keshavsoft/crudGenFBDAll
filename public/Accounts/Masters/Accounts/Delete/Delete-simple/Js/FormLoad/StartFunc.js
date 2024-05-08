import {StartFunc as StartFuncBuildBSTables} from "./BuildBSTables/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    StartFuncAddListeners();
};

export { StartFunc };
