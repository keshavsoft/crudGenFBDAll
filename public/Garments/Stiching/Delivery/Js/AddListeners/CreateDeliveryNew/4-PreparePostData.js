let StartFunc = () => {
    var $table = $('#table')
    var JVarLocalArray = $.map($table.bootstrapTable('getSelections'), function (row) {
        console.log(row);
        return {
            ProductName: row.ProductName,
            GrossAmount: row.GrossAmount,
            ItemDescription: row.ItemDescription,
            FK: row.FK,
            Itempk: row.pk,
            delivery: row.delivery
        };
    });
    return JVarLocalArray;
};

export { StartFunc };