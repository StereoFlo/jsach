import { Injectable } from '@nestjs/common';
import { HttpService as MainHttpService } from '@nestjs/axios';
import {
  catchError,
  firstValueFrom,
  map,
  Observable,
  retry,
  throwError,
} from 'rxjs';
import { BoardList } from './models/board-list';
import Board from './models/thread-list/board';
import { Threads } from './models/threads';

@Injectable()
export class HttpService {
  constructor(private httpService: MainHttpService) {}

  getAll(): Promise<BoardList> {
    return this.toPromise(
      this.getResponse(
        'https://2ch.hk/makaba/mobile.fcgi?task=get_boards',
        (response) => response.data,
      ),
    );
  }

  getThreadList(id: string): Promise<Board> {
    return this.toPromise(
      this.getResponse(
        `https://2ch.hk/${id}/threads.json`,
        (response) => response.data,
      ),
    );
  }

  getThread(id: string, num: number): Promise<Threads> {
    return this.toPromise(
      this.getResponse(`https://2ch.hk/${id}/res/${num}.json`, (response) => {
        return new Threads(response.data.threads[0]);
      }),
    );
  }

  private getResponse(url: string, cl: any): Observable<any> {
    return this.httpService.get(url).pipe(
      map(cl),
      retry(3),
      catchError((error) => {
        return throwError(error);
      }),
    );
  }

  private toPromise(bs: Observable<any>): Promise<any> {
    return firstValueFrom(bs);
  }
}
