export class ThreadView {
  Board: string;
  BoardInfo: string;
  BoardInfoOuter: string;
  BoardName: string;
  advert_bottom_image: string;
  advert_bottom_link: string;
  advert_top_image: string;
  advert_top_link: string;
  board_banner_image: string;
  board_banner_link: string;
  board_speed: number;
  bump_limit: number;
  current_page: number;
  current_thread: number;
  default_name = 'Аноним';
  enable_dices: number;
  enable_flags: number;
  enable_icons: number;
  enable_images: number;
  enable_likes: number;
  enable_names: number;
  enable_oekaki: number;
  enable_posting: number;
  enable_sage: number;
  enable_shield: number;
  enable_subject: number;
  enable_thread_tags: number;
  enable_trips: number;
  enable_video: number;
  is_board: number;
  is_index: number;
  max_comment: number;
  max_files_size: number;
  pages: number[];
  threads: Thread[];

  constructor(data: any) {
    Object.assign(this, data);
    this.threads = [];
    if (data.threads && Array.isArray(data.threads)) {
      data.threads.forEach((data) => this.threads.push(new Thread(data)));
    }
  }
}

export class Thread {
  files_count: number;
  posts: Post[];
  posts_count: number;
  thread_num: string;

  constructor(data: any) {
    Object.assign(this, data);
    this.posts = [];
    if (data.posts && Array.isArray(data.posts)) {
      data.posts.forEach((data) => this.posts.push(new Post(data)));
    }
  }
}

export class Post {
  private readonly internalLinksPattern =
    /<a href="\/([a-z]+)\/res\/([0-9]+).html#([0-9]+)" class="post-reply-link" data-thread="[0-9]+" data-num="[0-9]+">>>[0-9]+((\s)\(OP\))?<\/a>/;

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
      new RegExp(this.internalLinksPattern, 'g'),
      '<a href="/$1/$2#$3">$3</a>',
    );
  }
}

export class File {
  displayname: string;
  fullname?: string;
  height: number;
  md5?: string;
  name: string;
  nsfw?: number;
  path: string;
  size: number;
  thumbnail: string;
  tn_height: number;
  tn_width: number;
  type: number;
  width: number;
  duration?: string;
  duration_secs?: number;
  install?: string;
  pack?: string;
  sticker?: string;
}
