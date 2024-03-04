const StartFunc = ({ inData, inDataToInsert, inSchema }) => {
    let LocalInData = inData;
    let LocalinSchema = inSchema;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalQrCodeId = inDataToInsert.QrCodeId

    for (const prop in LocalTableSchema) {
        if ("unique" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    let LocalArrayChech = LocalInData.some(element => element.QrCodeId == LocalQrCodeId);

    if (LocalArrayChech) {
        LocalReturnData.KReason = "Already in it"
        return LocalReturnData
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };