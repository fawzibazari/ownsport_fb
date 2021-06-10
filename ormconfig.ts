import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"

const config: MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "ownsport",
    synchronize: true,
    entities:['entities/*.ts']
}
export default config