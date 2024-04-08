import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        // let inFetchPostData = {
        //     FolderName: inFolderName,
        //     FileNameOnly: inFileName,
        //     ItemName: inItemName,
        //     ScreenName: "Create"
        // };

        let inFetchPostData = PreparePostDataStartFunc();
        
        let jVarLocalFetchUrl = `/bin/pos/WithKeysCheck`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();
        
        return await data;
    } catch (error) {
        console.log("error:", error);
    };
};

export { StartFunc };