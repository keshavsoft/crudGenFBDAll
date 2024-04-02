let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    jVarLocalForm.classList.add('was-validated');

    if (jVarLocalForm.checkValidity() === false) {
        return false;
        // event.preventDefault()
        // event.stopPropagation()
    };

    // jFLocalClientValidate();


    // if ((jFFactory()) === false) {
    //     return false;
    // };

    return true;
};

const jFFactory = () => {
    let jVarLocalFactory = document.getElementById('AccountNameId');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        return false;
    };
    return true;
};

let jFLocalClientValidate = () => {
    const forms = document.querySelectorAll('.needs-validation')
    let jVarLocalForm = document.getElementById("FormId");

    if (!jVarLocalForm.checkValidity()) {
        // event.preventDefault()
        // event.stopPropagation()
    };

    jVarLocalForm.classList.add('was-validated');
};

export { StartFunc }