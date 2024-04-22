import fs  from 'fs'
// import Configjson from '../../../../../../../Config.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.UserDataFilePath = `KData/JSON/902/Generate.json`;

    const db = fs.readFileSync(LocalReturnData.UserDataFilePath);
    const data = JSON.parse(db);
    console.log("data:",data);
    return data;
};
StartFunc();
// export { StartFunc };
