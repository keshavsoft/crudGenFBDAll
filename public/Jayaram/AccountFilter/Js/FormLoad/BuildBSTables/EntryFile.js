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

};

const jFPrepareColumns = () => {
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

const jFPrepareDate = () => {
    var $Date = $('#DateId');
    $Date.attr({
        "data-field": "da",
        "data-sortable": "true",
        "data-sort-name": "da",
        "data-sort-order": "desc"
    });
    $Date.addClass("d-none d-sm-table-cell");
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
