import Post from './post';

export class Threads {
  posts = [];

  constructor(data: any) {
    data.posts.forEach((post) => {
      this.posts.push(new Post(post));
    }, this);
  }
}
