let StartFunc = (index, row, $detail) => {
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForRow");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    const s = new XMLSerializer();
    const str = s.serializeToString(clone);
    $detail.html(str)
    jFLocalShowCustomerName({inCustomerName:row.CustomerName,$detail,inStr:str})
    jFLocalShowMobile({inMobile:row.Mobile,$detail,inStr:str})
    jFLocalShowCity({inCity:row.City,$detail,inStr:str})
};
let jFLocalShowCustomerName = ({inCustomerName,$detail}) =>{
    let jVarLocalCustomerNameId = $detail.find('#CustomerNameId');

    jVarLocalCustomerNameId[0].value = inCustomerName;
};

let jFLocalShowMobile = ({inMobile,$detail}) =>{
    let jVarLocalMobileId = $detail.find('#MobileId');

    jVarLocalMobileId[0].value = inMobile;
};

let jFLocalShowCity = ({inCity,$detail}) =>{
    let jVarLocalCityId = $detail.find('#CityId');

    jVarLocalCityId[0].value = inCity;
};

export { StartFunc };

