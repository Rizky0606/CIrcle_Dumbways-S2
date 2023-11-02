import { useState } from "react";
import { LoginUser } from "@/types/TypeLoginUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "@/libs/api";
import { AUTH_LOGIN } from "@/store/RootReducer";
import { useToast } from "@chakra-ui/react";
export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<LoginUser>({
    email: "",
    password: "",
  });

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", form);
      dispatch(AUTH_LOGIN(response?.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed",
        description: "Email or password is incorrect",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }
  const handleChangeInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return {
    showPassword,
    setShowPassword,
    form,
    handleChangeInputLogin,
    handleLogin,
  };
};
