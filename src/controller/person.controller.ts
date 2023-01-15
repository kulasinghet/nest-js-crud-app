import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { PersonInterface, PersonService } from '../providor/person.service';
import { Person } from './../entity/person.entity';
import { ParamsTokenFactory } from '@nestjs/core/pipes';

interface PersonDTO {
  name: string;
  age: number;
  university: string;
}

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async findAll(@Req() req): Promise<PersonInterface[]> {
    const people = await this.personService.findAll();
    return people;
  }

  @Post()
  async create(@Body() personDTO: PersonDTO) {
    const person = await this.personService.create(personDTO);
    if (person) {
      return 'Person created successfully';
    } else {
      return 'Error';
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any): Promise<string> {
    const person = await this.personService.update(id, body);
    if (person) {
      return 'Person updated successfully';
    } else {
      return 'Error';
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const person = await this.personService.delete(id);
    if (person) {
      return 'Person successfully deleted';
    } else {
      return 'Error';
    }
  }
}
