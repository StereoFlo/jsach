import { Get, Controller, Render, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    return { message: await this.appService.getAll() };
  }

  @Get(':id')
  @Render('thread-list')
  async getThreadList(@Param('id') id: string) {
    return { list: await this.appService.getThreadList(id), boardId: id };
  }

  @Get(':id/:num')
  @Render('thread-view')
  async getThread(@Param('id') id: string, @Param('num') num: number) {
    return { thread: await this.appService.getThread(id, num) };
  }
}
