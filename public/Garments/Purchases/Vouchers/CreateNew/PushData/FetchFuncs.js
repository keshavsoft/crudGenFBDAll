import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FolderName: inFolderName,
            FileNameOnly: inFileName,
            ItemName: inItemName,
            ScreenName: "Create"
        };

        let inPostData = PreparePostDataStartFunc();
        
        // let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/Insert`;
        let jVarLocalFetchUrl = `/bin/Vouchers`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

     //   LocalAfterSaveFunc({ inFetchPostData: data });
     LocalReturnObject.KTF = true;
        return await data;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };