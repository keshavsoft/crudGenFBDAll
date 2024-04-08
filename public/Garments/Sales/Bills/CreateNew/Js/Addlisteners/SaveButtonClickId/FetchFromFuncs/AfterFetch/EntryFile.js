let StartFunc = ({ inFetchData, inBodyData }) => {
    let LocalinFetchData = inFetchData;
    let LocalCustomerName = inBodyData.CustomerName;
    let LocalMobile = inBodyData.Mobile;


    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../ShowAll/ShowAll.html",url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append("RowPK", LocalinFetchData)
    new_url.searchParams.append("ToProducts", true)
    window.location.href = new_url.href;
    return;


};

export { StartFunc }