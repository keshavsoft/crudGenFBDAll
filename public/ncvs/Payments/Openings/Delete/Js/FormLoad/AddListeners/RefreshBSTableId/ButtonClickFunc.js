let StartFunc = () => {
    jFLocalHideSpinner();

    var $table = $('#table');
    // $table.bootstrapTable({
    //     onClickRow: function (row, $element, field) {
    //         console.log("aaaaaaaa : ", row, field, $element);
    //     }
    // });
    $table.bootstrapTable({
        onClickRow: jFLocalClickRow
    });

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalClickRow = (row, $element, field) => {
    if (field === 6) {
        jFLocalClickRowForDelete(row).then();
    };
};

let jFLocalClickRowForDelete = async (inRow) => {
    let LocalRowPk = inRow.pk;

    let jVarLocalFetchUrl = `/bin/Openings/${LocalRowPk}`;
    let LocalBodyData = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, LocalBodyData);

    if (response.status === 200) {
        var $table = $('#table');
  
        $table.bootstrapTable('refresh');
    };
};

export { StartFunc }