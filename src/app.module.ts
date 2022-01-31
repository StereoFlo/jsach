import { Module } from '@nestjs/common';
import { MainController } from './controller/main-controller';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from './service/http.service';

@Module({
  imports: [HttpModule],
  controllers: [MainController],
  providers: [HttpService],
})
export class AppModule {}
