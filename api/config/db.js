/* import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);

export default connection.promise(); */


import mysql from "mysql2";

const connection = mysql.createConnection({
    host: '135.148.121.160',
    user: 'track_user',
    password: 'trackIoT2023!!',
    database: 'trackiot'
});

export default connection.promise();
