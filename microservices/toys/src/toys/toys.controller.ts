import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { ToysService } from './toys.service';

@Controller()
export class ToysController {
  constructor(private readonly toysService: ToysService) {}

  @MessagePattern('createToy')
  create(@Payload() createToyDto: CreateToyDto) {
    return this.toysService.create(createToyDto);
  }

  @MessagePattern('findAllToys')
  findAll() {
    return this.toysService.findAll();
  }

  @MessagePattern('findOneToy')
  findOne(@Payload() id: number) {
    return this.toysService.findOne(id);
  }

  @MessagePattern('updateToy')
  update(@Payload() updateToyDto: UpdateToyDto) {
    return this.toysService.update(updateToyDto.id, updateToyDto);
  }

  @MessagePattern('removeToy')
  remove(@Payload() id: number) {
    return this.toysService.remove(id);
  }
}
