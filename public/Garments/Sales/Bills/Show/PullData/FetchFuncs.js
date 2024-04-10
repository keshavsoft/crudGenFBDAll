let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: inRowPK,
            Screenname: "Create"
        };

        //        let jVarLocalFetchUrl = /${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData;
        // let jVarLocalFetchUrl = `/bin/pos/${inRowPK}`;
        let jVarLocalFetchUrl = `/bin/Bills2425/FilterData/pk/${inRowPK}`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl);
        return await response;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };