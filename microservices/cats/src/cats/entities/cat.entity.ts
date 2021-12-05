export class Cat {
  id: number;
  name: string;
  age: number;
  ownerId: number;

  constructor(id: number, name: string, age: number, ownerId: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.ownerId = ownerId;
  }
}
