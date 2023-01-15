import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const devConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'octaveLabsTest',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
