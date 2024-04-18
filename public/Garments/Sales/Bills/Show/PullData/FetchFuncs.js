let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: inRowPK,
            Screenname: "Create"
        };

        let jVarLocalFetchUrl = `/bin/Bills2425/FilterData/pk/${inRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        return await response;

    } catch (error) {
        console.log("error:", error);
    };
};

export { FromNode };