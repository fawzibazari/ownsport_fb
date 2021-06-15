var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "User", // Will use table name `category` as default behaviour.
    tableName: "User", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        nom: {
            type: "varchar"
        },
        prenom: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        }
    }
});