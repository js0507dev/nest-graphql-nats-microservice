import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { OwnersResolver } from './owners.resolver';
import { OwnersService } from './owners.service';

@Module({
  providers: [OwnersResolver, OwnersService],
  imports: [
    ClientsModule.register([
      {
        name: 'OWNERS_SERVICE',
        transport: Transport.NATS,
        options: {
          queue: 'owners_queue',
          url: 'nats://localhost:4222',
        },
      },
    ]),
  ],
})
export class OwnersModule {}
