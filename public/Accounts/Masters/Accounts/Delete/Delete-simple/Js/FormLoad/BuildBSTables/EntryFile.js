import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncOnClickRow } from "./OnClickRow.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onClickRow: StartFuncOnClickRow
    });
};

export { StartFunc };
