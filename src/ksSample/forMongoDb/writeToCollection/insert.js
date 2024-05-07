import { MongoClient } from "mongodb";
import { startFunc as startFuncForPassword } from "../commonFuncs/forPassword.js";

import configJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = async () => {
    try {

        const password = startFuncForPassword();

        let url = configJson.mongoDbConfig.url;
        const dbName = configJson.mongoDbConfig.DbName;
        const LocalcollectionName = configJson.mongoDbConfig.collectionName;

        url = url.replace("<password>", password);

        const client = new MongoClient(url);

        await client.connect();
        // console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection(LocalcollectionName);
        const insertResult = await collection.insertOne({ a: 1 });
        // let serverData = await collection.find().toArray();
        // console.log('serverData successfully to server', serverData);
        return await insertResult;
    } catch (error) {
        console.log("error : ", error);
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };