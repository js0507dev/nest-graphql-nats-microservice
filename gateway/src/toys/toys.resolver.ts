import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreateToyInput } from './dto/create-toy.input';
import { UpdateToyInput } from './dto/update-toy.input';
import { ToysService } from './toys.service';

@Resolver('Toy')
export class ToysResolver {
  constructor(private readonly toysService: ToysService) {}

  @Mutation('createToy')
  create(@Args('createToyInput') createToyInput: CreateToyInput) {
    return this.toysService.create(createToyInput);
  }

  @Query('toys')
  findAll() {
    return this.toysService.findAll();
  }

  @Query('toy')
  findOne(@Args('id') id: number) {
    return this.toysService.findOne(id);
  }

  @Mutation('updateToy')
  update(@Args('updateToyInput') updateToyInput: UpdateToyInput) {
    return this.toysService.update(updateToyInput.id, updateToyInput);
  }

  @Mutation('removeToy')
  remove(@Args('id') id: number) {
    return this.toysService.remove(id);
  }
}
