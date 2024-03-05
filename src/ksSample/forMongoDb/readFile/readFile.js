import { MongoClient } from "mongodb";

import configJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = async () => {
    try {
        if ("KS_PASSWORD_FORMONGODB" in process.env === false) {
            console.log("KS_PASSWORD_FORMONGODB not found in .env file");
            return await false;
        };

        let url = configJson.mongoDbConfig.url;
        const dbName = configJson.mongoDbConfig.DbName;
        const LocalcollectionName = configJson.mongoDbConfig.collectionName;

        url = url.replace("<password>", process.env.KS_PASSWORD_FORMONGODB);
        // "mongodb+srv://nknnkumar:UIcMiTMOhfVupJFF@cluster0.xafoxqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        const client = new MongoClient(url);

        await client.connect();
        // console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection(LocalcollectionName);
        let serverData = await collection.find().toArray();
        // console.log('serverData successfully to server', serverData);
        return await serverData;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };