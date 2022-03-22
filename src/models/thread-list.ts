export class ThreadList {
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

class Thread {
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

class Post {
  banned: number;
  closed: number;
  comment: string;
  date: string;
  email: string;
  endless: number;
  files: File[];
  files_count?: number;
  lasthit: number;
  name: string;
  num: string;
  op: number;
  parent: string;
  posts_count?: number;
  sticky: number;
  subject: string;
  tags?: string;
  timestamp: number;
  trip: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

class File {
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
