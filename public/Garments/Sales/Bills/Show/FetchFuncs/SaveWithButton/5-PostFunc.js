import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

const StartFunc = async ({ inFetchBody }) => {
    // let jFetchUrl = `/bin/BillsQrCode/WithKeysCheck`;
    let jFetchUrl = `/Custom/Clients/Maguva/Transactions/Sales/QrCodes`;

    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);
    console.log("response:::",response);

    let jVarLocalResponseData = await response.json();

    StartFuncAfterFetchFunc({ inResponse: jVarLocalResponseData });

};

export { StartFunc };