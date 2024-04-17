let StartFunc = ({ inDataToShow }) => {
    let data = inDataToShow;
    
    jFLocalToInputBillNumberId(data.BillNumber);
};

let jFLocalToInputBillNumberId = (inValue) => {
    let jVarLocalHtmlId = 'BillNumberId';
   let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalBillNumberId === null === false) {
      jVarLocalBillNumberId.value = inValue;
   };
};

export { StartFunc };