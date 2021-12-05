export class Owner {
  id: number;
  name: string;
  catIds?: number[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
