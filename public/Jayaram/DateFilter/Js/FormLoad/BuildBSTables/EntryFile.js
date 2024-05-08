///import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
///import { StartFunc as StartFuncOnClickRow } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        detailView: true
    });
};

export { StartFunc };
