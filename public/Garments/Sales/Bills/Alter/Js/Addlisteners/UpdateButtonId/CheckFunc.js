let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalGrossAmoutId = document.getElementById("GrossAmoutId");
    let jVarLocalReturnAmountId = document.getElementById("ReturnAmountId");

    jVarLocalForm.classList.add('was-validated');

    if (jVarLocalForm.checkValidity() === false) {
        return false;
    };

    if (jVarLocalGrossAmoutId.value > jVarLocalReturnAmountId.value) {
        return false;
    };

    return true;
};


export { StartFunc }