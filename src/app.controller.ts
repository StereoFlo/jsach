import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { map, of } from 'rxjs';

@Controller()
export class AppController {
  constructor(private http: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: this.test() };
  }

  test() {
    const message = this.http.getAll().pipe(
      map((result) => {
        console.log(result);
        return result.data;
      }),
    );

    return of(message);
  }
}
