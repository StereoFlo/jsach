import {Injectable} from '@nestjs/common';
import {BoardList} from '../models/board-list';
import {HttpService} from './http.service';
import {Pagination} from "../models/pagination";

@Injectable()
export class ThreadsService {
    constructor(private readonly httpService: HttpService) {
    }

    async getAllBoards(): Promise<BoardList> {
        return await this.httpService.getAll();
    }

    async getThreadList(id: string, page: number): Promise<any> {
        const list = await this.httpService.getThreadList(id, page);
        const paginationStart = list.pages.slice(0, 3);
        const paginationEnd = list.pages.slice(
            list.pages.length - 3,
            list.pages.length,
        );

        return {list, paginationStart, paginationEnd};
    }

    async getThread(id: string, num: number, page = 1, limit = 10): Promise<any> {
        const thread = await this.httpService.getThread(id, num);
        const threads = thread.threads[0];
        const first = threads.posts[0];
        delete threads.posts[0];
        const total = Math.ceil(threads.posts.length / limit);
        const offset = (page - 1) * 10;
        const posts = threads.posts.slice(offset, limit + offset);
        return {
            first,
            posts,
            pagination: new Pagination(total, page),
        };
    }
}
