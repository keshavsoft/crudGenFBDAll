let StartFunc = ({ inDataToShow }) => {
    let data = inDataToShow;
    console.log(data);
    jFLocalToInputAccountNameId(data.AccountName);
    jFLocalToInputDateId(data.Date);
    
};

let jFLocalToInputAccountNameId = (inValue) => {
    console.log(inValue);
    let jVarLocalHtmlId = 'AccountNamesSelectId';
    let jVarLocalAccountNameId = document.getElementById(jVarLocalHtmlId);
    for (let i = 0; i < jVarLocalAccountNameId.options.length; i++) {
        console.log(jVarLocalAccountNameId.options[i].value);
        if(jVarLocalAccountNameId.options[i].value === inValue){

            jVarLocalAccountNameId.options[i].selected = "selected";
            return;
        }
    }
    
};
let jFLocalToInputDateId = (inValue) => {
    let jVarLocalHtmlId = 'DateId';
   let jVarLocalDateId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalDateId === null === false) {
      jVarLocalDateId.value = inValue;
   };
};

export { StartFunc };