import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ThreadListController } from './thread-list/thread-list.controller';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ThreadListController],
  providers: [AppService],
})
export class AppModule {}
