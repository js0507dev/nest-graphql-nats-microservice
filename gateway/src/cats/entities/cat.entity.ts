import * as gql from '../../graphql';

export class Cat {
  id: number;
  name: string;
  age: number;
  ownerId: number;

  constructor(id, name, age, ownerId) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.ownerId = ownerId;
  }

  toDto(): gql.Cat {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      owner: undefined,
    };
  }
}
