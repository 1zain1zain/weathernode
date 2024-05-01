import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Service } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Service],
})
export class AppModule {}
