import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import * as gql from '../graphql';

@Injectable()
export class OwnersService {
  constructor(@Inject('OWNERS_SERVICE') private ownersService: ClientProxy) {}
  async create(createOwnerInput: gql.CreateOwnerInput) {
    const createdOwner = await firstValueFrom(
      this.ownersService.send<gql.Owner>('createOwner', createOwnerInput),
    );
    return createdOwner;
  }

  async findAll() {
    const findOwners = await firstValueFrom(
      this.ownersService.send<gql.Owner[]>('findAllOwners', {}),
    );
    return findOwners;
  }

  async findOne(id: number) {
    const findOwner = await firstValueFrom(
      this.ownersService.send<gql.Owner>('findOwner', { id }),
    );
    return findOwner;
  }

  async update(id: number, updateOwnerInput: gql.UpdateOwnerInput) {
    const updatedOwner = await firstValueFrom(
      this.ownersService.send<gql.Owner>('updateOwner', { updateOwnerInput }),
    );
    return updatedOwner;
  }

  async remove(id: number) {
    const removedOwner = await firstValueFrom(
      this.ownersService.send<gql.Owner>('removeOwner', { id }),
    );
    return removedOwner;
  }
}
