import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { HttpService } from '../service/http.service';

@Controller()
export class MainController {
  constructor(private readonly httpService: HttpService) {}

  @Get('/favicon.ico')
  async favicon() {
    return { OK: '' };
  }

  @Get()
  @Render('index')
  async index(): Promise<any> {
    return { message: await this.httpService.getAll() };
  }

  @Get(':id')
  @Render('thread-list')
  async getThreadList(
    @Param('id') id: string,
    @Query('page') page = 1,
  ): Promise<any> {
    const list = await this.httpService.getThreadList(id, page);
    const paginationStart = list.pages.slice(0, 3);
    const paginationEnd = list.pages.slice(
      list.pages.length - 3,
      list.pages.length,
    );

    return { list, paginationStart, paginationEnd, title: list.BoardInfo };
  }

  @Get(':id/:num')
  @Render('thread-view')
  async getThread(
    @Param('id') id: string,
    @Param('num') num: number,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<any> {
    const thread = await this.httpService.getThread(id, num);
    const threads = thread.threads[0];
    const first = threads.posts[0];
    delete threads.posts[0];
    const total = Math.ceil(threads.posts.length / limit);
    const offset = (page - 1) * 10;
    const posts = threads.posts.slice(offset, limit + offset);
    const pages = [];
    for (let i = 1, len = total; i <= len; i += 1) {
      pages.push(i);
    }
    return {
      title: first.subject,
      thread,
      first,
      posts,
      pagination: {
        total,
        page,
        first: pages.slice(0, 3),
        last: pages.slice(total - 3, total),
      },
    };
  }
}
