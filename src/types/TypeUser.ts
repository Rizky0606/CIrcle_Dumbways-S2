export type Follower = {
  id: number;
  username: string;
  full_name: string;
  photo_profile: string;
};

export type Following = {
  id: number;
  username: string;
  full_name: string;
  photo_profile: string;
};

export type Threads = {
  id: number;
};

export type TypeUser = {
  id: number;
  full_name: string;
  username: string;
  email: string;
  photo_profile: string;
  bio: string;
  follower: Follower[];
  following: Following[];
  threads: Threads[];
};
