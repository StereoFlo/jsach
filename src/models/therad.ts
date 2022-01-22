import { Threads } from './threads';

export default class Therad {
  Board: string;
  BoardInfo: string;
  BoardInfoOuter: string;
  BoardName: string;
  advert_bottom_image: string;
  advert_bottom_link: string;
  advert_mobile_image: string;
  advert_mobile_link: string;
  advert_top_image: string;
  advert_top_link: string;
  board_banner_image: string;
  board_banner_link: string;
  bump_limit: number;
  current_thread: string;
  default_name: string;
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
  files_count: number;
  is_board: number;
  is_closed: number;
  is_index: number;
  max_comment: number;
  max_files_size: number;
  max_num: number;
  posts_count: number;
  thread_first_image: string;
  threads: Threads[];
  title: string;
  unique_posters: string;
}
