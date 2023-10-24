import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailThreads } from "@/components/types/TypeDetailThreads";

const DetailThread = () => {
  const [data, setData] = useState<DetailThreads>();
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${params.id}`).then((res) => {
      setData(res?.data);
    });
  }, []);
  console.log(data);

  return <div></div>;
};

export default DetailThread;
