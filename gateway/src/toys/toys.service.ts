import { Injectable } from '@nestjs/common';

import { CreateToyInput } from './dto/create-toy.input';
import { UpdateToyInput } from './dto/update-toy.input';

@Injectable()
export class ToysService {
  create(_createToyInput: CreateToyInput) {
    return 'This action adds a new toy';
  }

  findAll() {
    return `This action returns all toys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toy`;
  }

  update(id: number, _updateToyInput: UpdateToyInput) {
    return `This action updates a #${id} toy`;
  }

  remove(id: number) {
    return `This action removes a #${id} toy`;
  }
}
