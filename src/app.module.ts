import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from './http.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [HttpService],
})
export class AppModule {}
