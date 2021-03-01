const { Client } = require('pg');

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.PGHOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.DB_PORT
});

client.connect().catch((e) =>{
        console.error(e)
        process.exit(1)}
    );

module.exports = client;