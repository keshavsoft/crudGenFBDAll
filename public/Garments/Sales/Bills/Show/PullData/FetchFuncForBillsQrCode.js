let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let localItemName = "BillsQrCode";

        let fetchBodyObj = {
            inFolderName: inFolderName,
            inFileNameOnly: inFileName,
            inItemName: "BillsQrCode",
            inColumnName: "BillPk",
            inValueToCheck: { "BillPk": inRowPK }
        };

        // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;
        let jVarLocalFetchUrl = `/bin/BillsQrCode/FilterData/BillPk/${inRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
       
        return await response;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };