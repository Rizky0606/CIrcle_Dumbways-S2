import { useState } from "react";
import { LoginUser } from "@/types/TypeLoginUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "@/libs/api";
import { AUTH_LOGIN } from "@/store/RootReducer";
export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
