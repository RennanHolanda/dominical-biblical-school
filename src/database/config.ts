import { Dialect } from 'sequelize/types';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

interface EnvConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  port: number;
  use_env_variable?: string;
}

const config: EnvConfig = {
  username: process.env.DB_USER as string,
  password: process.env.DB_PASS as string,
  database: process.env.DB_NAME as string,
  host: process.env.DB_HOST as string,
  dialect: process.env.DB_DIALECT as Dialect,
  port: parseInt(process.env.DB_PORT as string, 10),
  use_env_variable: process.env.DATABASE_URL,  // Se você estiver usando uma variável de ambiente para a URL do banco de dados
};

export default config;
