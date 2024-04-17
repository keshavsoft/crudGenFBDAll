let StartFunc = ({ inFetchData }) => {
    console.log("inFetchData : ", inFetchData);
    jFLocalToInputReturnAmountId(inFetchData.GrossAmount);
};

let jFLocalToInputReturnAmountId = (inValue) => {
    let jVarLocalHtmlId = 'ReturnAmountId';
   let jVarLocalReturnAmountId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalReturnAmountId === null === false) {
      jVarLocalReturnAmountId.value = inValue;
   };
};

export { StartFunc }