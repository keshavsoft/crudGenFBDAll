import { StartFunc as StartFuncInitializeSequelize } from "./initializeSequelize.js";
import ConfigJson from '../Config.json' assert {type: 'json'};
import path from "path";

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
        sequelize.define(path.parse(element.name).name, element.fileData, { freezeTableName: true });
    });

    return await sequelize;
    // sequelize.sync({ force: true });
};

export { StartFunc }
// StartFunc().then();