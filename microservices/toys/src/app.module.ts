import { Module } from '@nestjs/common';

import { ToysModule } from './toys/toys.module';

@Module({
  imports: [ToysModule],
})
export class AppModule {}
