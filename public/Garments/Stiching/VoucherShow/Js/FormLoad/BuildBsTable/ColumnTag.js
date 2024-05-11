const StartFunc = () => {
    jFPrepareMobile();
    jFPrepareCustomerName();
    jFPrepareCity();

};

const jFPrepareMobile = () => {
    var $mobile = $('#MobileId');
    $mobile.attr({
        "data-field": "Mobile",
        "data-sortable": "true",
        "data-sort-name": "Mobile",
        "data-sort-order": "desc"
    });
    $mobile.addClass("d-none d-sm-table-cell");
};

const jFPrepareCustomerName = () => {
    var $CustomerName = $('#CustomerNameId');
    $CustomerName.attr({
        "data-field": "CustomerName",
        "data-sortable": "true",
        "data-sort-name": "CustomerName",
        "data-sort-order": "desc"
    });
    $CustomerName.addClass("d-none d-sm-table-cell");
};

const jFPrepareCity = () => {
    var $City = $('#CityId');
    $City.attr({
        "data-field": "City",
        "data-sortable": "true",
        "data-sort-name": "City",
        "data-sort-order": "desc"
    });
    $City.addClass("d-none d-sm-table-cell");
};

export { StartFunc };
