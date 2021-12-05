import { AggregateRoot } from '@nestjs/cqrs';

export class Cat extends AggregateRoot {
  constructor(
    private id: number,
    private name: string,
    private age: number,
    private ownerId: number,
  ) {
    super();
  }
}
