import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateCatCommand } from './commands/create-cat.command';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

let dumyCats: Cat[] = [new Cat(1, 'green', 2, 1), new Cat(2, 'red', 4, 2)];

@Injectable()
export class CatsService {
  constructor(private commandBus: CommandBus) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.commandBus.execute<CreateCatCommand, Cat>(
      new CreateCatCommand(
        dumyCats.length + 1,
        createCatDto.name,
        createCatDto.age,
        createCatDto.ownerId,
        1,
      ),
    );
    dumyCats.push(createdCat);
    return createdCat;
  }

  findAll(): Cat[] {
    return dumyCats;
  }

  async findOne(id: number): Promise<Cat> {
    return dumyCats.find((cat) => cat.id === id);
  }

  update(id: number, updateCatDto: UpdateCatDto): Cat {
    dumyCats = dumyCats.map((cat) => {
      if (cat.id === id) {
        cat.name = updateCatDto.name;
        cat.age = updateCatDto.age;
      }
      return cat;
    });
    return dumyCats.find((cat) => cat.id === id);
  }

  remove(id: number): Cat {
    const removeCat = dumyCats.find((cat) => cat.id === id);
    dumyCats = dumyCats.filter((cat) => cat.id !== id);
    return removeCat;
  }
}
