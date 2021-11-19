import { Injectable } from '@nestjs/common';
import * as gql from '../graphql';
import { Cat } from './entities/cat.entity';

let dumyCats: Cat[] = [new Cat(1, 'green', 2, 1), new Cat(2, 'red', 4, 2)];

@Injectable()
export class CatsService {
  create(createCatInput: gql.CreateCatInput): gql.Cat {
    const createdCat = new Cat(
      dumyCats.length + 1,
      createCatInput.name,
      createCatInput.age,
      createCatInput.ownerId,
    );
    dumyCats.push(createdCat);
    return createdCat.toDto();
  }

  findAll(): gql.Cat[] {
    return dumyCats.map((cat) => cat.toDto());
  }

  findOne(id: number): gql.Cat {
    return dumyCats.find((cat) => cat.id === id).toDto();
  }

  update(id: number, updateCatInput: gql.UpdateCatInput): gql.Cat {
    dumyCats = dumyCats.map((cat) => {
      if (cat.id === id) {
        cat.name = updateCatInput.name;
        cat.age = updateCatInput.age;
      }
      return cat;
    });
    return dumyCats.find((cat) => cat.id === id).toDto();
  }

  remove(id: number): gql.Cat {
    const removeCat = dumyCats.find((cat) => cat.id === id);
    dumyCats = dumyCats.filter((cat) => cat.id !== id);
    return removeCat.toDto();
  }
}
