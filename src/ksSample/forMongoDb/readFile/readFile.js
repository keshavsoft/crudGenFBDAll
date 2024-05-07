import { MongoClient } from "mongodb";

import configJson from '../../../Config.json' assert {type: 'json'};
import { startFunc as startFuncForPassword } from "../commonFuncs/forPassword.js";
import { startFunc as startFuncForUrl } from "../commonFuncs/ForUrl.js";
let StartFunc = async () => {
    try {
        const password = startFuncForPassword();
        let url = startFuncForUrl();
        const dbName = configJson.mongoDbConfig.DbName;
        const LocalcollectionName = configJson.mongoDbConfig.collectionName;

        url = url.replace("<password>", password);

        const client = new MongoClient(url);

        await client.connect();
        // console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection(LocalcollectionName);
        let serverData = await collection.find().toArray();
        // console.log('serverData successfully to server', serverData);
        return await serverData;
    } catch (error) {
        console.log("error : ", error);
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };