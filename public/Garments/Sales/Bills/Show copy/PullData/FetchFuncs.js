let FromNode = async ({ inRowPK }) => {
    try {
        // let jVarLocalFetchUrl = `/bin/pos/FilterData/pk/${inRowPK}`;
        let jVarLocalFetchUrl = `/bin/pos/MaxRow`;
        const response = await fetch(jVarLocalFetchUrl);
        return await response;

    } catch (error) {
        console.log("error:", error);
    };
};

export { FromNode };