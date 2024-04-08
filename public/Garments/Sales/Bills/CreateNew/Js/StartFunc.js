import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

const StartFunc = () => {

    const form = document.getElementById("FormId");
    LocalDateFunc();
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault(); // Prevent HTML refresh

    StartFuncButtonClickFunc();

    // const formData = new FormData(form); // Converts to array of arrays
    // const obj = Object.fromEntries(formData); // Array of arrays to object
    // console.log("aaaaaaaa : ", obj);
    // });
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

    let jVarLocalDateId = document.getElementById('Date');
    console.log("formattedDate:", formattedDate);
    jVarLocalDateId.value = formattedDate;
}

StartFunc();