import { API } from "@/libs/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

type FormThread = {
  content: string;
  image: Blob | MediaSource | string;
};
type FormReply = {
  content: string;
  image?: string;
  threadsId: number;
};

export const useThreads = () => {
  const { data: threads } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const { data } = await API.get("/threads");
      return data;
    },
    refetchInterval: 1000,
  });
  return { threads };
};

export const postThreads = () => {
  const [keyword, setKeyword] = useState<FormThread>({
    content: "",
    image: "",
  });

  const toast = useToast();
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
      toast({
        title: "Success created thread",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

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
    mutate,
    isPending,
    handleChangeInputThread,
    handleButtonCLick,
  };
};

export const useDetailThreads = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: detailThreads, isLoading } = useQuery({
    queryKey: ["detailThreads", params.id],
    queryFn: async () => {
      const { data } = await API.get(`/thread/${params.id}`);

      return data;
    },
    refetchInterval: 1000,
  });

  const [keyword, setKeyword] = useState<FormReply>({
    content: "",
    image: "",
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
        threadsId: Number(params.id),
      });
    },
  });

  const handleChangeInputReplies = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword({
      ...keyword,
      [e.target.name]: e.target.value,
    });
  };

  return {
    keyword,
    navigate,
    detailThreads,
    mutation,
    isLoading,
    handleChangeInputReplies,
  };
};
