export type DataThreads = {
  id: number;
  created_at: string;
  content: string;
  image: string;
  userId: {
    full_name: string;
    username: string;
    photo_profile: string;
  };
  likes: [
    {
      id: number;
    }
  ];
  replies: [
    {
      id: number;
    }
  ];
};
