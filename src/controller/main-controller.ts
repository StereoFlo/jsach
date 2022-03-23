import {Controller, Get, Param, Query, Render} from '@nestjs/common';
import {ThreadsService} from '../service/threads-service';

@Controller()
export class MainController {
    constructor(
        private readonly threadsService: ThreadsService,
    ) {
    }

    @Get('/favicon.ico')
    async favicon() {
        return {OK: ''};
    }

    @Get()
    @Render('index')
    async index(): Promise<any> {
        return {
            message: await this.threadsService.getAllBoards(),
        };
    }

    @Get(':id')
    @Render('thread-list')
    async getThreadList(
        @Param('id') id: string,
        @Query('page') page = 1,
    ): Promise<any> {
        return await this.threadsService.getThreadList(id, page);
    }

    @Get(':id/:num')
    @Render('thread-view')
    async getThread(
        @Param('id') id: string,
        @Param('num') num: number,
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<any> {
        return await this.threadsService.getThread(id, num, page, limit);
    }
}
