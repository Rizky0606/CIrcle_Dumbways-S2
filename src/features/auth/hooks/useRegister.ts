import { useState } from "react";
import { RegisterUser } from "@/types/TypeRegisterUser";
import { API } from "@/libs/api";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<RegisterUser>({
    full_name: "",
    username: "",
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (register: RegisterUser) => {
      return API.post("/auth/register", register);
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["register"] });
      setForm({
        full_name: "",
        username: "",
        email: "",
        password: "",
      });
      navigate("/auth/login");
    },
  });

  const handleChangeInputRegister = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  return {
    showPassword,
    setShowPassword,
    form,
    handleChangeInputRegister,
    mutation,
  };
};
