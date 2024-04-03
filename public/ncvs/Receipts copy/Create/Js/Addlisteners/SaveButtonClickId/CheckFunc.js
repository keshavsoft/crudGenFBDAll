let StartFunc = () => {
    if ((jFFactory()) === false) {
        return false;
    };

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

export { StartFunc }