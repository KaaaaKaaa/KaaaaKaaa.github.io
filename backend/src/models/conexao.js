const pgp = require('pg-promise')();

// Configuração da conexão com o PostgreSQL
const connection = {
  host: process.env.PG_HOST,  // Host do PostgreSQL
  port: 5432,         // Porta padrão do PostgreSQL
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD
};

// Crie uma instância do banco de dados
module.exports = pgp(connection);
