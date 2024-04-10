import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

const StartFunc = () => {
    StartFuncShowOnDom();

    StartFuncButtonClickFunc();

};

StartFunc();