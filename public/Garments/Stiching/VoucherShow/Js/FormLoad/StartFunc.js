import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.jsx";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
