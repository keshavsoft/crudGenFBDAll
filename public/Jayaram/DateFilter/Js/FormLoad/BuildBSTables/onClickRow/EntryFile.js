import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";

const StartFunc = (row, $element, field) => {
    if (field === 4) {
        StartFuncDeleteButton({ inRow: row });
    };
};
export { StartFunc };