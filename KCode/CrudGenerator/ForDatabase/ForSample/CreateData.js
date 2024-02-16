// import { StartFunc as StartFuncInitializeSequelize } from "../../../../src/kSequelize/initializeSequelize.js";

import { StartFunc as StartFuncAssignSchema } from "../../../../src/kSequelize/AssignSchema.js";

// import ConfigJson from '../../../../src/Config.json' assert {type: 'json'};
// import path from "path";

let StartFunc = async () => {
    const sequelize = await StartFuncAssignSchema();

    // ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
    //     sequelize.define(path.parse(element.name).name, element.fileData, { freezeTableName: true });
    // });

    sequelize.sync({ force: true });
};

// export { StartFunc }
StartFunc().then();