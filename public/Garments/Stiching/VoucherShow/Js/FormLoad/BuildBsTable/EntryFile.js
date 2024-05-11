import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncColumnTag } from "./ColumnTag.js";

const StartFunc = () => {
    StartFuncTableTag();
    StartFuncColumnTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: []
    });
};

export { StartFunc };
