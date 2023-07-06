import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginUserType } from "../../../../api/services/types";
import useLoginUser from "../../../../api/services/auth/useLoginUser";
import { manageErrors } from "../../../../utils/manageErrors";
import { useCallback } from "react";
import Cookies from "universal-cookie";
import { routes } from "../../../../routes";

const cookies = new Cookies();
const LoginSchema = yup.object({
  username: yup
    .string()
    .required("نام کاربری را وارد کنید")
,
  password: yup
    .string()
    .required("پسورد را وارد کنید")

});
const useLoginUsers = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginUserType["payload"]>({
    resolver: yupResolver(LoginSchema),
  });

  const { mutate } = useLoginUser({
    onSuccess: (data: any) => {
      cookies.set("user", data.data.user, { path: "/" });
      cookies.set("refreshToken", data.token.refreshToken, { path: "/" });
      cookies.set("accessToken", data.token.accessToken, { path: "/" });
      const user = cookies.get("user");
      navigate("/");
    },
    onError: (err) => {
      manageErrors({ err, setError });
    },
  });

  const handleLoginUser = useCallback(
    (d: LoginUserType["payload"]) => {
      mutate(d);
    },
    [mutate]
  );

  return {
    handleLoginUser,
    register,
    handleSubmit,
    errors,
  };
};
export default useLoginUsers;
