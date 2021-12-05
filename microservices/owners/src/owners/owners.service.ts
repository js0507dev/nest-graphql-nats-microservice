import { Injectable } from '@nestjs/common';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

let dumyOwners: Owner[] = [new Owner(1, 'tanner'), new Owner(2, 'colin')];

@Injectable()
export class OwnersService {
  create(createOwnerDto: CreateOwnerDto) {
    const createdOwner = new Owner(dumyOwners.length + 1, createOwnerDto.name);
    dumyOwners.push(createdOwner);
    return createdOwner;
  }

  findAll() {
    return dumyOwners;
  }

  findOne(id: number) {
    return dumyOwners.find((owner) => owner.id === id);
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    dumyOwners = dumyOwners.map((owner) => {
      if (owner.id === id) {
        owner.name = updateOwnerDto.name;
      }
      return owner;
    });
    return dumyOwners.find((owner) => owner.id === id);
  }

  remove(id: number) {
    const removeOwner = dumyOwners.find((owner) => owner.id === id);
    dumyOwners = dumyOwners.filter((owner) => owner.id !== id);
    return removeOwner;
  }
}
