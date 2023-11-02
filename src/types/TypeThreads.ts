export type DataThreads = {
  id: number;
  created_at: string;
  content: string;
  image: string;
  userId: {
    id: number;
    full_name: string;
    username: string;
    photo_profile: string;
  };
  likes: [
    {
      id: number;
      userId: {
        id: number;
        email: string;
        username: string;
      };
    }
  ];
  replies: [
    {
      id: number;
    }
  ];
};
