import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnersService } from './owners.service';

@Controller()
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @MessagePattern('createOwner')
  create(@Payload() createOwnerDto: CreateOwnerDto) {
    return this.ownersService.create(createOwnerDto);
  }

  @MessagePattern('findAllOwners')
  findAll() {
    return this.ownersService.findAll();
  }

  @MessagePattern('findOneOwner')
  findOne(@Payload() id: number) {
    return this.ownersService.findOne(id);
  }

  @MessagePattern('updateOwner')
  update(@Payload() updateOwnerDto: UpdateOwnerDto) {
    return this.ownersService.update(updateOwnerDto.id, updateOwnerDto);
  }

  @MessagePattern('removeOwner')
  remove(@Payload() id: number) {
    return this.ownersService.remove(id);
  }
}
