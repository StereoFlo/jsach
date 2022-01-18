import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getAll(): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      'https://api.stereoflo.ru/v1/board',
    );
  }
}
