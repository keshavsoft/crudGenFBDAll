let StartFunc = async (row, $element, field) => {
    // console.log(field);
    if (field === 4) {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You want to alter this!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, alter it!",
            // returnFocus:false,
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            await jFLocalClickRowForAlter(row);
        };
    };
};

let jFLocalClickRowForAlter = async (inRow) => {
    let LocalRowPk = inRow.pk;

    window.location = `../Alter/Alter.html?inRowPk=${LocalRowPk}`;
};

export { StartFunc };