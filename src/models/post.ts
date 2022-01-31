import { File } from './post/file';

export default class Post {
  constructor(post: Post) {
    Object.assign(this, post);
    if (post.comment) {
      this.setComment(post.comment);
    }
  }
  banned: number;
  closed: number;
  comment: string;
  date: string;
  email: string;
  endless: number;
  files: File[];
  lasthit: number;
  name: string;
  num: number;
  number: number;
  op: number;
  parent: string;
  sticky: number;
  subject: string;
  tags: string;
  timestamp: number;
  trip: string;

  private setComment(comment: string): void {
    this.comment = comment;
  }
}
