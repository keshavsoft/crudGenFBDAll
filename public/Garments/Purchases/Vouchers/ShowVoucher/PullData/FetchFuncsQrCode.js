let FromNode = async ({ inProjectName, inFolderName, inFileNameOnly, inItemName, inColumnName, inValueToCheck }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = { inFolderName, inFileNameOnly, inItemName, inColumnName, inValueToCheck };
        console.log("inValueToCheck : ", inValueToCheck);
        // let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;
        let jVarLocalFetchUrl = `/bin/Vouchers/${inValueToCheck.PurchasePk}`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };