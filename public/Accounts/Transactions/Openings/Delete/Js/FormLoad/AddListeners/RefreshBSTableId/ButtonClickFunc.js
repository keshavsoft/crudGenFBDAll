let StartFunc = () => {
    jFLocalHideSpinner();

    var $table = $('#table');

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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, delete it!",
            // returnFocus:false,
            reverseButtons:true,
            focusCancel:true,
            cancelButtonText: "Cancel"
          }).then((result) => {
            if (result.isConfirmed) {
                jFLocalClickRowForDelete(row).then();
            }
          });
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