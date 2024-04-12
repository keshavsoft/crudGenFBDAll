import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import { StartFunc as StartFuncFetchFromEndPoint } from "./FetchFromEndPoint/EntryFile.js";
import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    // await StartFuncFetchFromEndPoint();

    // jFLocalHideSpinner();

    // let jVarLocalDataNeeded = localStorage.getItem(ConfigJson.tableName);

    var $table = $('#table');
    console.log("table", $table);
    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        data: [],
        onPostBody: function () {
            console.log("aaaaaaaa");
            $("#TableFooterAccountNameId").focus();
            StartFuncOnLoadSuccess();
        }
    });

    // StartFuncOnLoadSuccess();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }