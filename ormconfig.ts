import User from "./entities/user";
import { ConnectionOptions } from "typeorm";
module.exports= {
    type: 'mysql',
    host: 'localhost',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'ownsportFB',
    synchronize: false,
    "entities": [
        User
    ],
    "migrations": [
         "database/migrations/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "database/migrations",
        "subscribersDir": "src/subscriber"
    }
}

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'ownsportFB',
    entities: [__dirname + '/**/*.entity{.ts,.js}',User],
  
    // We are using migrations, synchronize should be set to false.
    synchronize: false,
  
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    logging: true,
    logger: 'file',
  
    // allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };