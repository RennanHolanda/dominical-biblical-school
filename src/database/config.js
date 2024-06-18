require("ts-node/register"); // Carrega ts-node para interpretar arquivos .ts
const config = require("./config.ts").default; // Importa a configuração TypeScript

module.exports = config;
