// hooks/useShowPassword.js
import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return { showPassword, handleShowPassword };
};

export default useShowPassword;
