let StartFunc = () => {
    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

var $table = $('#Modaltable');
$table.bootstrapTable();


export { StartFunc }