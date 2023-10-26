import { useState } from "react";
import { RegisterUser } from "@/types/TypeRegisterUser";

export const useRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<RegisterUser>({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });

  const handleChangeInputRegister = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return {
    showPassword,
    setShowPassword,
    form,
    setForm,
    handleChangeInputRegister,
  };
};
