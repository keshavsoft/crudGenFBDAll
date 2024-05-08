import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        console.log("in formload");
        StartFuncFormLoad();

        //StartFuncShowOnDom().then();
    };
};

StartFunc();