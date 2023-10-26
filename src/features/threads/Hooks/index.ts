import { API } from "@/libs/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type FormThread = {
  content: string;
  image: string;
  userId: number;
};
type FormReply = {
  content: string;
  image?: string;
  userId: number;
  threadsId: number;
};

export const useThreads = () => {
  const { data: threads } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const { data } = await API.get("/threads");
      return data;
    },
  });
  return { threads };
};

export const postThreads = () => {
  const [keyword, setKeyword] = useState<FormThread>({
    content: "",
    image: "",
    userId: 2,
  });

  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newthread: FormThread) => {
      return API.post("/thread", newthread);
    },
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ["threads"] });
      setKeyword({
        content: "",
        image: "",
        userId: 2,
      });
    },
  });

  const handleChangeInputThread = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword({
      ...keyword,
      [e.target.name]: e.target.value,
    });
  };

  return { keyword, mutation, handleChangeInputThread };
};

export const useDetailThreads = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState<boolean>(false);
  const { data: detailThreads, isLoading } = useQuery({
    queryKey: ["detailThreads", params.id],
    queryFn: async () => {
      const { data } = await API.get(`/thread/${params.id}`);

      return data;
    },
  });

  const [keyword, setKeyword] = useState<FormReply>({
    content: "",
    image: "",
    userId: 2,
    threadsId: Number(params.id),
  });

  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newreplies: FormReply) => {
      return API.post("/reply", newreplies);
    },
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ["detailThreads", params.id] });
      setKeyword({
        content: "",
        image: "",
        threadsId: Number(params.id),
        userId: 2,
        // likeId:
      });
    },
  });

  const handleChangeInputReplies = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword({
      ...keyword,
      [e.target.name]: e.target.value,
    });
  };

  const handleLikedPost = () => {
    setIsLike(!isLike);
  };

  return {
    keyword,
    isLike,
    navigate,
    detailThreads,
    mutation,
    isLoading,
    handleChangeInputReplies,
    handleLikedPost,
  };
};
