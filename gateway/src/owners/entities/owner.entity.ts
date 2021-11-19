import * as gql from '../../graphql';

export class Owner {
  id: number;
  name: string;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toDto(): gql.Owner {
    return {
      id: this.id,
      name: this.name,
      cats: undefined,
    };
  }
}
