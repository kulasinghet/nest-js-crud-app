import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  university: string;
}
