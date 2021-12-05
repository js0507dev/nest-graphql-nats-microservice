import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @MessagePattern('createCat')
  create(@Payload() createCatDto: CreateCatDto) {
    console.log('test');
    return this.catsService.create(createCatDto);
  }

  @MessagePattern('findAllCats')
  findAll() {
    return this.catsService.findAll();
  }

  @MessagePattern('findOneCat')
  findOne(@Payload() id: number) {
    return this.catsService.findOne(id);
  }

  @MessagePattern('updateCat')
  update(@Payload() updateCatDto: UpdateCatDto) {
    return this.catsService.update(updateCatDto.id, updateCatDto);
  }

  @MessagePattern('removeCat')
  remove(@Payload() id: number) {
    return this.catsService.remove(id);
  }
}
