import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    OwnersModule,
    ToysModule,
  ],
})
export class AppModule {}
