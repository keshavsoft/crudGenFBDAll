import { StartFunc as StartFuncCommonFuncs } from '../../../../../../../bin/Generate/kLowDb/PullData/EntryFile.js';

const StartFuncForBookings = ({ inId }) => {
    let LocalId = inId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.inDb.data.find(e => e.PurchasePk == LocalId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };

    return LocalReturnData;
};
export { StartFuncForBookings };