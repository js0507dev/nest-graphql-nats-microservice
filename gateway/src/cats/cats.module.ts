import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';

@Module({
  providers: [CatsResolver, CatsService],
  imports: [
    ClientsModule.register([
      {
        name: 'TOYS_SERVICE',
        transport: Transport.NATS,
        options: {
          queue: 'toys_queue',
          url: 'nats://localhost:4222',
        },
      },
      {
        name: 'CATS_SERVICE',
        transport: Transport.NATS,
        options: {
          queue: 'cats_queue',
          url: 'nats://localhost:4222',
        },
      },
    ]),
  ],
})
export class CatsModule {}
