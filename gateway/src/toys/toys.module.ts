import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ToysResolver } from './toys.resolver';
import { ToysService } from './toys.service';

@Module({
  providers: [ToysResolver, ToysService],
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
    ]),
  ],
})
export class ToysModule {}
