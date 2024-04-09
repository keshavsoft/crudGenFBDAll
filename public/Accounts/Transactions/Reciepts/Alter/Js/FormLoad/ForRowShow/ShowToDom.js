let StartFunc = ({ inDataToShow }) => {
    let data = inDataToShow;
    jFLocalToInputAccountNameId(data.AccountName);
    jFLocalToInputBSGroupId(data.BSGroup);
};

let jFLocalToInputAccountNameId = (inValue) => {
    let jVarLocalHtmlId = 'AccountNameId';
    let jVarLocalAccountNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAccountNameId === null === false) {
        jVarLocalAccountNameId.value = inValue;
    };
};

let jFLocalToInputBSGroupId = (inValue) => {
    let jVarLocalHtmlId = 'BSGroupId';
    let jVarLocalBSGroupId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBSGroupId === null === false) {
        jVarLocalBSGroupId.value = inValue;
    };
};

export { StartFunc };