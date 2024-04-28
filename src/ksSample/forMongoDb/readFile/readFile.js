import { MongoClient } from "mongodb";

import configJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = async () => {
    try {
        if ("KS_PASSWORD_FORMONGODB" in process.env === false) {
            console.log("KS_PASSWORD_FORMONGODB not found in .env file");
            return await false;
        };

        const password = encodeURIComponent(process.env.KS_PASSWORD_FORMONGODB);

        let url = configJson.mongoDbConfig.url;
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