import { API } from "@/libs/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

type FormThread = {
  content: string;
  image: Blob | MediaSource | string;
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
  });

  const QueryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      const formData = new FormData();
      formData.append("content", keyword.content);
      formData.append("image", keyword.image as File);
      return API.post("/thread", formData);
    },
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ["threads"] });
      setKeyword({
        content: "",
        image: "",
      });
    },
  });

  // const mutation = useMutation({
  //   mutationFn: (postThread) => {
  //     return API.post("/thread", postThread);
  //   },
  // });

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("content", keyword.content);
  //   formData.append("image", keyword.image as File);
  //   mutation.mutate(formData);
  // };

  const handleChangeInputThread = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = e.target;
    if (files) {
      setKeyword({
        ...keyword,
        [name]: files[0],
      });
    } else {
      setKeyword({
        ...keyword,
        [name]: value,
      });
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonCLick = () => {
    fileInputRef.current?.click();
  };

  return {
    keyword,
    // handlePostThreads,
    mutate,
    isPending,
    // onSubmit,
    handleChangeInputThread,
    handleButtonCLick,
  };
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
