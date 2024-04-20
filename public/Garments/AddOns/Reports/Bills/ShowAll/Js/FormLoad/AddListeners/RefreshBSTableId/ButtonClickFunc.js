import { StartFunc as StartFuncBillsQrCodeExpenFile } from "./OnExpandRowFunc.js";

let StartFunc = async () => {
    jFLocalHideSpinner();

    let jVarLocalQrCodeData = await jFLocalInsertAggValues();

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalQrCodeData,
        detailView: true,
        onExpandRow: StartFuncBillsQrCodeExpenFile
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};


let jFLocalInsertAggValues = async () => {
    let jVarLocalPos = await jFLocalFetchpos();
    let jVarLocalBillsQrCode = await jFLocalFetchBillsQrCode();

   let jVarLocalReturnObject = jVarLocalPos.map(loopPos => {
        loopPos.AggValues = {};
        loopPos.AggValues.QrCodeDetails = jVarLocalBillsQrCode.filter(e => e.BillPk == loopPos.pk);
        return loopPos;
    });

    return jVarLocalReturnObject;
};

let jFLocalFetchpos = async () => {
    let jVarLocalFetchUrl = "/bin/pos/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = "/bin/BillsQrCode/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }