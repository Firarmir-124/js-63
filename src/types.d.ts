export interface Post {
  id: string;
  data: string;
  name: string;
  content: string;
}

export interface PostMutation {
  data: string;
  name: string;
  content: string;
}

export interface PostList {
  [id: string]: Post;
}

export interface AboutType {
  title: string;
  content: string;
}