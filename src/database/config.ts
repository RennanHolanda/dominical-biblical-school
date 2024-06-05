import { Dialect } from 'sequelize/types';

export interface EnvConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  use_env_variable?: string;
}

const config: { [key: string]: EnvConfig } = {
  development: {
    username: 'root',
    password: 'password',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: "null",
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
  },
};

module.exports = config;
