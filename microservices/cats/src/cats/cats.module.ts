import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CommandHandlers } from './commands/handlers';

@Module({
  controllers: [CatsController],
  providers: [CatsService, ...CommandHandlers],
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'TOYS_SERVICE',
        transport: Transport.NATS,
        options: {
          queue: 'toys_queue',
          url: 'nats://localhost:4222',
        },
      },
    ]),
  ],
})
export class CatsModule {}
