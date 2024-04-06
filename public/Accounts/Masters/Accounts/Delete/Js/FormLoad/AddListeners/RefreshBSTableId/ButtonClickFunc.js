let StartFunc = () => {
    jFLocalHideSpinner();

    var $table = $('#table');

    $table.bootstrapTable({
        onClickRow: jFLocalClickRow
    });

};

let jFLocalClickRow_Keshav_6Apr = async (row, $element, field) => {
    // console.log(field);
    if (field === 3) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "grey",
            cancelButtonColor: "#d33",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Cancel",
            cancelButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isDismissed) {
                jFLocalClickRowForDelete(row).then();
            } else if (result.isConfirmed) {

            }
        });
        // jFLocalClickRowForDelete(row).then();
    };
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalClickRow = async (row, $element, field) => {
    // console.log(field);
    if (field === 3) {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "grey",
            cancelButtonColor: "#d33",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Cancel",
            cancelButtonText: "Yes, delete it!"
        });

        if (jVarLocalFromSwal.isDismissed) {
            await jFLocalClickRowForDelete(row);
        };
    };
};

let jFLocalClickRowForDelete = async (inRow) => {
    let LocalRowPk = inRow.pk;

    let jVarLocalFetchUrl = `/bin/Accounts/${LocalRowPk}`;
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