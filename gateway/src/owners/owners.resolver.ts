import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import * as gql from '../graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Resolver('Owner')
export class OwnersResolver {
  constructor(
    private readonly ownersService: OwnersService,
    @Inject('TOYS_SERVICE') private toysService: ClientProxy,
  ) {}

  @Mutation('createOwner')
  create(@Args('createOwnerInput') createOwnerInput: gql.CreateOwnerInput) {
    return this.ownersService.create(createOwnerInput);
  }

  @Query('owners')
  async findAll() {
    const toys = await firstValueFrom(
      this.toysService.send<string>(
        'findAllToys',
        JSON.stringify({}),
      ),
    );
    const owners = this.ownersService.findAll();
    owners.push({
      id: 12345,
      name: toys,
    });
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
