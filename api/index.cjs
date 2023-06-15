const pg = require("pg");
const { Pool, Client } = pg;
 

async function testPool() {
    // pools will use environment variables
    // for connection information
    const pool = new Pool()
     
    // you can also use async/await
    const res = await pool.query('SELECT NOW()')
    console.log("Pool res ", res);
    await pool.end()
}
 
async function testClient() {
    // clients will also use environment variables
    // for connection information
    const client = new Client()
    await client.connect()
     
    const res = await client.query('SELECT NOW()')
    console.log("Client res ", res);
    await client.end()
}

function printEnv() {

    console.log("ENV");
    console.log(process.env);
    console.log("ENV END");
}

async function runTests() {
    console.log("RUNNING");

    await testPool();
    await testClient();
    console.log("FINISHED");
}


runTests();
