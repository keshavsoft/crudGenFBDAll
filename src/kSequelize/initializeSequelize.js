import { Sequelize } from "sequelize";
import Configjson from '../Config.json' assert { type: 'json' };

// this is commented as this is only useful when creating sample database
// import dotenv from 'dotenv';
// dotenv.config();

let CommonsequelizeConfig = Configjson.sequelizeConfig;
let commonJonPth = Configjson.sequelizeConfig.DataPath;
let commonDataPk = Configjson.sequelizeConfig.DataPk;
let commonDbName = Configjson.sequelizeConfig.DbName;

let StartFunc = async () => {
    let sequelize;

    try {
        if (CommonsequelizeConfig.isMysql) {
            if ("KS_PASSWORD_FORMYSQL" in process.env === false) {
                console.log("KS_PASSWORD_FORMYSQL not found in .env file");
                return await false;
            };

            sequelize = new Sequelize(Configjson.sequelizeConfig.DbName,
                'root',
                process.env.KS_PASSWORD_FORMYSQL,
                {
                    host: 'localhost',
                    dialect: 'mysql'
                });

            return await sequelize;
        };

        sequelize = new Sequelize({
            dialect: 'sqlite',
            logging: false,
            storage: `${commonJonPth}/${commonDataPk}/${commonDbName}` // You can specify the path for your SQLite database file
        });
    } catch (error) {
        console.log(`error from sequelize : ${process.cwd()}`);
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };

    return await sequelize;
};

export { StartFunc };