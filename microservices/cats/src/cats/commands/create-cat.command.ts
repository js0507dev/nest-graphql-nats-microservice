export class CreateCatCommand {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly age: number,
    public readonly ownerId: number,
    public readonly toyId?: number,
  ) {}
}
