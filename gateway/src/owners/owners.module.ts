import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    OwnersResolver,
    OwnersService,
  ],
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
export class OwnersModule {}
