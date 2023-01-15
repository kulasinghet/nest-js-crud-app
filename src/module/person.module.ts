import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../entity/person.entity';
import { PersonController } from '../controller/person.controller';
import { PersonService } from '../providor/person.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'octaveLabsTest',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
    }),
    TypeOrmModule.forFeature([Person]),
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
