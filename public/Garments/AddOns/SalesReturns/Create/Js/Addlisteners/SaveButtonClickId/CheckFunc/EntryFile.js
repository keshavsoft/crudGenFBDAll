let StartFunc = () => {
    let resource = ""
    const response = await fetch(resource);
    let jVarLocalForm = document.getElementById("FormId");

    jVarLocalForm.classList.add('was-validated');

    if (jVarLocalForm.checkValidity() === false) {
        return false;
    };

    return true;
};

export { StartFunc }