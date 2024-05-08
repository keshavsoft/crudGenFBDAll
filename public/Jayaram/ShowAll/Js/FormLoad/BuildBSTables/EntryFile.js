const StartFunc = () => {
    jFLocalToTableTag();
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
    // $table.attr("data-show-footer", "true");
    $table.attr("data-filter-control", "true");
    $table.attr("data-show-columns", "true",)
    $table.attr("data-show-columns-toggle-all", "true",)
    $table.attr("data-pagination", "true");
    $table.attr("data-show-toggle", "true");
    $table.attr("data-show-export", "true");
    $table.attr("data-click-to-select", "true");
    $table.attr("data-id-field", "pk");
    $table.attr("data-detail-formatter", "detailFormatter");
    $table.attr("data-url", "/bin/Accounts/DataOnly");




};


export { StartFunc };
