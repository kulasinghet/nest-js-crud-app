import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../entity/person.entity';

export interface PersonInterface {
  name: string;
  age: number;
  university: string;
}

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<PersonInterface>,
  ) {}

  async findAll(): Promise<PersonInterface[]> {
    return await this.personRepository.find();
  }

  async create(person: PersonInterface): Promise<PersonInterface> {
    return this.personRepository.save(this.personRepository.create(person));
  }

  async update(id: string, person: PersonInterface): Promise<UpdateResult> {
    return this.personRepository
      .createQueryBuilder()
      .update(Person)
      .set(person)
      .where('id = :id', { id })
      .execute();
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.personRepository
      .createQueryBuilder()
      .delete()
      .from(Person)
      .where('id = :id', { id })
      .execute();
  }
}
