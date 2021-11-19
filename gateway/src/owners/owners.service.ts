import { Inject, Injectable } from '@nestjs/common';
import * as gql from '../graphql';
import { Owner } from './entities/owner.entity';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

let dumyOwners: Owner[] = [new Owner(1, 'tanner'), new Owner(2, 'colin')];

@Injectable()
export class OwnersService {
  create(createOwnerInput: gql.CreateOwnerInput) {
    const createdOwner = new Owner(
      dumyOwners.length + 1,
      createOwnerInput.name,
    );
    dumyOwners.push(createdOwner);
    return createdOwner.toDto();
    return 'This action adds a new owner';
  }

  findAll() {
    return dumyOwners.map((owner) => owner.toDto());
  }

  findOne(id: number) {
    return dumyOwners.find((owner) => owner.id === id).toDto();
  }

  update(id: number, updateOwnerInput: gql.UpdateOwnerInput) {
    dumyOwners = dumyOwners.map((owner) => {
      if (owner.id === id) {
        owner.name = updateOwnerInput.name;
      }
      return owner;
    });
    return dumyOwners.find((owner) => owner.id === id).toDto();
  }

  remove(id: number) {
    const removeOwner = dumyOwners.find((owner) => owner.id === id);
    dumyOwners = dumyOwners.filter((owner) => owner.id !== id);
    return removeOwner.toDto();
  }
}
