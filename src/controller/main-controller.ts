import { Get, Controller, Render, Param, Query } from '@nestjs/common';
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
  async root() {
    return { message: await this.httpService.getAll() };
  }

  @Get(':id')
  @Render('thread-list')
  async getThreadList(@Param('id') id: string, @Query('page') page = 1) {
    const list = await this.httpService.getThreadList(id, page);
    const paginationStart = list.pages.slice(0, 3);
    const paginationEnd = list.pages.slice(
      list.pages.length - 3,
      list.pages.length,
    );

    return { list, paginationStart, paginationEnd };
  }

  @Get(':id/:num')
  @Render('thread-view')
  async getThread(
    @Param('id') id: string,
    @Param('num') num: number,
    @Query('page') page = 1,
  ) {
    const threads = await this.httpService.getThread(id, num);
    const first = threads.posts[0];
    delete threads.posts[0];
    const total = Math.ceil(threads.posts.length / 10);
    const offset = (page - 1) * 10;
    const posts = threads.posts.slice(offset, 10 + offset);
    const pages = [];
    for (let i = 1, len = total; i <= len; i += 1) {
      pages.push(i);
    }
    return {
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
