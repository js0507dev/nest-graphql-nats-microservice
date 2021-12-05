import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { Cat as CatEntity } from '../../entities/cat.entity';
import { Cat } from '../../models/cat.model';
import { CreateCatCommand } from '../create-cat.command';

@CommandHandler(CreateCatCommand)
export class CreateCatHandler implements ICommandHandler<CreateCatCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateCatCommand) {
    const { id, name, age, ownerId } = command;
    const cat = this.publisher.mergeObjectContext(
      new Cat(id, name, age, ownerId),
    );
    cat.commit();
    return new CatEntity(id, name, age, ownerId);
  }
}
