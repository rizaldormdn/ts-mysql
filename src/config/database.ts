import mysql, { Connection } from "mysql"
import dotenv from 'dotenv'
dotenv.config()

export const db: Connection = mysql.createConnection({
     host: process.env.HOST,
     user: process.env.USER,
     database: process.env.DATABASE,
     password: process.env.PASSWORD
})

db.connect((err) => {
     if (err) {
          throw err;
     } else {
          console.log('database connected');
     }
})