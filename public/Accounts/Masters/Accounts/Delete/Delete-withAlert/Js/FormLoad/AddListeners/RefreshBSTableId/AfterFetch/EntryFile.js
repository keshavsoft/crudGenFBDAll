let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    var $table = $('#table');
    
    $table.bootstrapTable("load",LocalDataToShow);
};

export { StartFunc }