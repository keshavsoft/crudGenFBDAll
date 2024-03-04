import { StartFunc as StartFuncInitializeSequelize } from "./initializeSequelize.js";
import { DataTypes } from "sequelize";

import ConfigJson from '../Config.json' assert {type: 'json'};
import path from "path";

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
        for (const property in element.fileData) {
            if (element.fileData[property].type === "STRING") {
                element.fileData[property].type = DataTypes.STRING;
            };

            if (element.fileData[property].type === "NUMBER") {
                element.fileData[property].type = DataTypes.NUMBER;
            };
        };

        sequelize.define(path.parse(element.name).name, element.fileData, { freezeTableName: true });

        //sequelize.define(path.parse(element.name).name, element.fileData, { freezeTableName: true });
    });

    return await sequelize;
    // sequelize.sync({ force: true });
};

export { StartFunc }
// StartFunc().then();