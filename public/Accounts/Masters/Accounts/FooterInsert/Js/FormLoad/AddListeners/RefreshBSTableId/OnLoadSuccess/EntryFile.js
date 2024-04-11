import { StartFunc as StartFuncTableFooterAccountNameId } from "./TableFooterAccountNameId/EntryFile.js";
import { StartFunc as StartFuncTableFooterAccountNameSearchButtonId } from "./TableFooterAccountNameSearchButtonId/EntryFile.js";

let StartFunc = () => {
    console.log("aaaaaaaa");
    StartFuncTableFooterAccountNameId();
    StartFuncTableFooterAccountNameSearchButtonId();
};

export { StartFunc };