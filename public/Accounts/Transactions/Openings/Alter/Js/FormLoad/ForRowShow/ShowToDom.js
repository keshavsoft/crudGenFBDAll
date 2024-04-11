let StartFunc = ({ inDataToShow }) => {
    let data = inDataToShow;
    console.log(data);
    jFLocalToInputAccountNameId(data.AccountName);
    jFLocalToInputDateId(data.Date);
    jFLocalToInputDescriptionId(data.Description);
};

let jFLocalToInputAccountNameId = (inValue) => {
    let jVarLocalHtmlId = 'AccountNameId';
    let jVarLocalAccountNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAccountNameId === null === false) {
        jVarLocalAccountNameId.value = inValue;
    };
};
let jFLocalToInputDateId = (inValue) => {
    let jVarLocalHtmlId = 'DateId';
   let jVarLocalDateId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalDateId === null === false) {
      jVarLocalDateId.value = inValue;
   };
};

let jFLocalToInputDescriptionId = (inValue) => {
    let jVarLocalHtmlId = 'DescriptionId';
   let jVarLocalDescriptionId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalDescriptionId === null === false) {
      jVarLocalDescriptionId.value = inValue;
   };
};

export { StartFunc };