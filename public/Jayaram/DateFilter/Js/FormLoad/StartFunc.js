import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";

const StartFunc = () => {
    console.log("in add listeners1");
    StartFuncBuildBSTables();
    console.log("in add listeners");
    StartFuncAddListeners();
};

export { StartFunc };
