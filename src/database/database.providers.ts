import { Sequelize } from 'sequelize-typescript';
import { Task } from '../tasks/task.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        models: [Task],
      });
      
      sequelize.addModels([Task]);

      await sequelize.sync({ force: false });

      return sequelize;
    },
  },
];