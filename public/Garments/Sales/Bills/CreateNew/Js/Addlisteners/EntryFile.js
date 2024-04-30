import { StartFunc as StartFuncSaveButtonClickId } from "./SaveButtonClickId/EntryFile.js";
import { StartFunc as StartFuncKeyPressShow } from "./KeyPressShow/EntryFile.js";

const StartFunc = () => {
    StartFuncSaveButtonClickId();
    StartFuncKeyPressShow();
};

export { StartFunc };