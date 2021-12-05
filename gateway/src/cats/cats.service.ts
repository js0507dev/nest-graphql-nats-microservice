import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import * as gql from '../graphql';

@Injectable()
export class CatsService {
  constructor(
    @Inject('TOYS_SERVICE') private toysService: ClientProxy,
    @Inject('CATS_SERVICE') private catsService: ClientProxy,
  ) {}
  async create(createCatInput: gql.CreateCatInput): Promise<gql.Cat> {
    console.log(createCatInput);
    const createdCat = await firstValueFrom(
      this.catsService.send<gql.Cat>('createCat', createCatInput),
    );
    return createdCat;
  }

  async findAll(): Promise<gql.Cat[]> {
    const cats = await firstValueFrom(
      this.catsService.send<gql.Cat[]>('findAllCats', {}),
    );
    return cats;
  }

  async findOne(id: number): Promise<gql.Cat> {
    const findCat = await firstValueFrom(
      this.catsService.send<gql.Cat>('findOneCat', { id }),
    );
    return findCat;
  }

  async update(
    id: number,
    updateCatInput: gql.UpdateCatInput,
  ): Promise<gql.Cat> {
    const updatedCat = await firstValueFrom(
      this.catsService.send<gql.Cat>('updateCat', updateCatInput),
    );
    return updatedCat;
  }

  async remove(id: number): Promise<gql.Cat> {
    const removedCat = await firstValueFrom(
      this.catsService.send<gql.Cat>('removeCat', { id }),
    );
    return removedCat;
  }
}
