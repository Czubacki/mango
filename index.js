const mongoString = "mongodb+srv://filipczubacki:RXCmtfIDOVQ0TASk@cluster0.agzjlmr.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);

async function main() {
    try {
        await client.connect();

        await listDB(client);
    } catch (error) {
            console.error(error);
    } finally {
        await client.close();
    }

}

async function listDB(client) {
    let databaseList = await client.db().admin().listDatabases();

    console.log("Lista baz danych:")
    
    databaseList.databases.forEach(database => {
     console.log("Nazwa: " + database.name + ", Rozmair: " + database.sizeOnDisk);
    });
}

main();