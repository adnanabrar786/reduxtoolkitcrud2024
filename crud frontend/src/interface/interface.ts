export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export interface PostData {
  title?: string;
  body?: string;
  _id: string;
}

export interface CounterState {
  post: Post[] | null;
  loading: boolean;
  error: {} | null;
  id?: number;
}

export interface AddPostInteface {
  title: string;
  description: string;
}
