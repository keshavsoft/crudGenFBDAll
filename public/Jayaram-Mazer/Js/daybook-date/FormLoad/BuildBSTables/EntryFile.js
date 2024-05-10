const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: []
    });
};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr("data-search", "true");
    $table.attr("data-search-highlight", "true");
    $table.attr("data-searchable", "true");
    $table.attr("data-show-footer", "true");
    $table.attr("data-filter-control", "true");
    $table.attr("data-show-columns", "true");
};

const jFPrepareColumns = () => {
    jFPrepareAccountName();
    jFPrepareDate();
    jFPrepareCredit();
    jFPrepareDebit();

};

const jFPrepareCredit = () => {
    var $Credit = $('#CreditId');
    $Credit.attr({
        "data-field": "Credit",
        "data-halign": "left",
        "data-align": "right"
    });
    $Credit.addClass("d-none d-sm-table-cell");
};

const jFPrepareAccountName = () => {
    var $AccountName = $('#AccountNameId');
    $AccountName.attr({
        "data-field": "nam",
        "data-sortable": "true",
        "data-sort-name": "nam",
        "data-sort-order": "desc"
    });
    $AccountName.addClass("d-none d-sm-table-cell");
};

const jFPrepareDate = () => {
    var $DateFilter = $('#DateFilterId');
    $DateFilter.attr({
        "data-field": "da",
        "data-sortable": "true",
        "data-sort-name": "da",
        "data-sort-order": "desc"
    });
    $DateFilter.addClass("d-none d-sm-table-cell");
};

const jFPrepareDebit = () => {
    var $Debit = $('#DebitId');
    $Debit.attr({
        "data-field": "Debit",
        "data-halign": "left",
        "data-align": "right"
    });
    $Debit.addClass("d-none d-sm-table-cell");
};

export { StartFunc };
