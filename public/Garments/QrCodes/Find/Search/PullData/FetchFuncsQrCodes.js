let FromNode = async ({ inProjectName, inValueToCheck }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        // let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;
        let jVarLocalFetchUrl = `/bin/Generate/FilterData/pk/${inValueToCheck}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };