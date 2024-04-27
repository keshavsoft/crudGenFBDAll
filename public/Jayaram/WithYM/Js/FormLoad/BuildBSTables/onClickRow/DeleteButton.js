import { StartFunc as StartFuncRefreshBSTableId } from "../../ListenerFuncs/RefreshBSTableId/ButtonClickFunc.js";

let StartFunc = async ({ inRow }) => {
    let jVarLocalFromSwal = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "grey",
        confirmButtonText: "Yes, delete it!",
        // returnFocus:false,
        reverseButtons: true,
        focusCancel: true,
        cancelButtonText: "Cancel"
    });

    if (jVarLocalFromSwal.isConfirmed) {
        jFLocalShowAlert({ inDataToShow: inRow.CustomerName });
        await jFLocalClickRowForDelete({ inPk: inRow.pk });
    };
};

let jFLocalShowAlert = ({ inDataToShow }) => {
    document.getElementById("deletedAccountName").textContent = inDataToShow;
    document.getElementById("AlertId").style.display = "block";
};

let jFLocalClickRowForDelete = async ({ inPk }) => {
    let LocalPk = inPk;

    let jVarLocalFetchUrl = `/bin/Masters/CustomerNames/${LocalPk}`;
    let LocalBodyData = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, LocalBodyData);

    if (response.status === 200) {
        StartFuncRefreshBSTableId();
        jFLocalHideSpinner();
    };
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };