import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import * as gql from '../graphql';

import { OwnersService } from './owners.service';

@Resolver('Owner')
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation('createOwner')
  create(@Args('createOwnerInput') createOwnerInput: gql.CreateOwnerInput) {
    return this.ownersService.create(createOwnerInput);
  }

  @Query('owners')
  async findAll() {
    const owners = this.ownersService.findAll();
    return owners;
  }

  @Query('owner')
  findOne(@Args('id') id: number) {
    return this.ownersService.findOne(id);
  }

  @Mutation('updateOwner')
  update(@Args('updateOwnerInput') updateOwnerInput: gql.UpdateOwnerInput) {
    return this.ownersService.update(updateOwnerInput.id, updateOwnerInput);
  }

  @Mutation('removeOwner')
  remove(@Args('id') id: number) {
    return this.ownersService.remove(id);
  }
}
