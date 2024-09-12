// does this work?
import  mysql from "mysql";
import { Conn } from "../config/db.config"

export function createRawConnection() {
    const connection = mysql.createConnection(Conn)
    console.log("Connection to db...")
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
      
        console.log('connected as id ' + connection.threadId);
      })

      return connection;
}