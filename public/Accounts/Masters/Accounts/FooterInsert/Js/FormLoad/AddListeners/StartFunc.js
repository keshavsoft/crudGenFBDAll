import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableId();
    jFLocalSearchItemButtonId();
};

let jFLocalSearchItemButtonId = () => {
    let jVarLocalHtmlId = "searcButtonId";
    let jVarLocaljVarLocalHtmlId = document.getElementById(jVarLocalHtmlId);
    jVarLocaljVarLocalHtmlId.addEventListener("click", jFLocalButtonClick);
};
let jFLocalButtonClick = () => {
    let jVarLocalHtmlId = "largeModal";
    let jVarLocallargeModal = document.getElementById(jVarLocalHtmlId);

    jVarLocallargeModal.addEventListener('shown.bs.modal', event => {
        let jVarLocalHtmlId = "customSearch";
        let jVarLocalcustomSearch = document.getElementById(jVarLocalHtmlId);
        jVarLocalcustomSearch.focus();

        var $table = $('#ModalItemsTable');

        $table.bootstrapTable({
            data: jFFromLocalStorage(),
            onClickRow: jFLocalRowClick
        });
        // do something...
    });

    const myModal = new bootstrap.Modal('#largeModal', {
        keyboard: false
    });

    myModal.show();


    // $table.bootstrapTable({
    //     onPostBody: function () {
    //         $(".fixed-table-toolbar .search .search-input").focus()
    //     }
    // });
};

export { StartFunc };