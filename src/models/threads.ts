import Post from './post';

export class Threads {
  private _posts: Post[];

  constructor(data) {
    Object.assign(this, data);
  }

  set posts(value: Post[]) {
    this._posts = value;
  }

  get posts(): Post[] {
    return this._posts;
  }
}
