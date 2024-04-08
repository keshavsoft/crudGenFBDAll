//import { StartFunc as VeticalStartFunc } from "./FetchFuncs/HtmlPull/Vetical.js";
// import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    // await ShowOnDom();
    LocalDateFunc();



    // await ShowOnDomDefaultValuesFromFetch({ inFolderName, inFileName, inItemName, inProjectName });
};

let ShowOnDomDefaultValuesFromFetch = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    // let LocalDataFromFetch = await ForCreateNewStartFunc({ inFolderName, inFileName, inItemName, inProjectName });

    if (LocalDataFromFetch.KTF) {
        let jVarLocalDateId = document.getElementById('DateId');
        let jVarLocalBillNumberId = document.getElementById('BillNumberId');

        if ("Date" in LocalDataFromFetch.JsonData) {
            jVarLocalDateId.value = LocalDataFromFetch.JsonData.Date;
        };

        if ("BillNumber" in LocalDataFromFetch.JsonData) {
            jVarLocalBillNumberId.innerHTML = LocalDataFromFetch.JsonData.BillNumber;
        };
    };
};

const LocalDateFunc = () => {
    var today = new Date();

    // Extract day, month, and year
    var day = today.getDate();
    var month = today.getMonth() + 1; // January is 0, so we add 1
    var year = today.getFullYear();

    // Pad day and month with leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Format the date as dd-mm-yyyy
    var formattedDate = day + '-' + month + '-' + year;

    let jVarLocalDateId = document.getElementById('DateId');
    console.log("formattedDate:",formattedDate);
    jVarLocalDateId.value = formattedDate;
}

export { StartFunc };