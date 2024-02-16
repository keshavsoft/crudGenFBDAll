// import { StartFunc as StartFuncFirstLevelEntryFile } from "./FirstLevelEntryFile.js";
// import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

import { StartFunc as StartFuncinitializeSequelize } from "../../../../src/kSequelize/initializeSequelize.js";
import ConfigJson from '../../../../src/Config.json' assert {type: 'json'};

let StartFunc = async () => {
    let LocalSeq = await StartFuncinitializeSequelize();

    // StartFuncFirstLevelEntryFile();
    // StartFuncSecondLevelEntryFile();
};



// let StartFunc = async () => {
//     let LocalTableName = tableNameJson.tableName;
//     let LocaltableAndColumns = Configjson.sequelizeConfig.tableAndColumns;

//     const sequelize = await StartFuncInitializeSequelize();

//     let LocalColumnsNeeded = LocaltableAndColumns.find(element => element.tableName === LocalTableName);

//     Object.entries(LocalColumnsNeeded.tableColumns).forEach(
//         ([key, value]) => {
//             if (value.type === "STRING") {
//                 value.type = DataTypes.STRING;
//             };

//             if (value.type === "NUMBER") {
//                 value.type = DataTypes.NUMBER;
//             };
//         }
//     );

//     sequelize.define(LocalTableName, LocalColumnsNeeded.tableColumns, { freezeTableName: true });

//     return await sequelize;
// };

export { StartFunc };
