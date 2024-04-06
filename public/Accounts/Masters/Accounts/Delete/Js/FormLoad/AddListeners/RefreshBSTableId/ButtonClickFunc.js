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
    // console.log(field);
    if (field === 3) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            
          }).then((result) => {
            if (result.isConfirmed) {
                jFLocalClickRowForDelete(row).then();
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
        // jFLocalClickRowForDelete(row).then();
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