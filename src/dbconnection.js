const fs= require("fs");
const knex= require("knex");

const connectToMysql= async function(){
    const dbPassword=await fs.promises.readFile('/run/secrets/db_password');

    const db= knex({
        client:'mysql2',
        connection:{
        host: 'mysql', //Nombre del servico de docker-compose.yml
        user:'user_sistema',
        password: dbPassword,
        database: 'proyecto'
        }
    });
    return db;
};

module.exports= {connectToMysql};