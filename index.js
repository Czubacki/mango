const mongoString = "mongodb+srv://filipczubacki:RXCmtfIDOVQ0TASk@cluster0.agzjlmr.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);

async function main() {

await client.connect();

await client.close();
}

main();