import { File } from './post/file';

export default class Post {
  private readonly internalLinksPattern =
    '<a href="/([a-z]+)/res/([0-9]+).html#([0-9]+)" class="post-reply-link" data-thread="[0-9]+" data-num="[0-9]+">>>[0-9]+</a>';

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
    this.comment = comment.replace(
      new RegExp(this.internalLinksPattern, 'gm'),
      '<a href="/$1/$2#$3">$3</a>',
    );
  }
}
