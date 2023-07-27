import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import useLoginUsers from "./useLogin";

const UserLogin = () => {
  const navigate = useNavigate();
  const naivgateHome = () => {
    navigate("/");
  };
  const { handleLoginUser, register, handleSubmit, errors } = useLoginUsers();
  return (
    <div className="h-full w-full flex justify-center items-center">
      <span
        onClick={naivgateHome}
        className="border p-1 border-gray-900 rounded-full fixed top-[90px] left-[50px]"
      >
        <img width={20} src="/icons/icon-02.svg"></img>
      </span>

      <form
        onSubmit={handleSubmit(handleLoginUser)}
        className="bg-[#fd6e54] md:w-[30%] text-end shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <h2 className="text-[#ffff]  text-xl font-semibold ">
          {" "}
          به فروشگاه هوم نت خوش امدید
        </h2>
        <div className="mb-4">
          <label className="block mt-10 pr-5 text-[#ffff] text-sm font-bold mb-2">
            نام کاربری
          </label>
          <input
            className=" bg-[#fd6e54] shadow appearance-none border rounded-full w-full 
            py-2 px-3 text-grey-darker "
            {...register("username")}
            id="username"
            type="text"
          />
          <span className="text-red-200">
            {" "}
            {errors ? errors.username?.message : ""}
          </span>
        </div>
        <div className="mb-6">
          <label className="block pr-5 text-[#ffff] text-sm font-bold mb-2">
            رمز عبور
          </label>
          <input
            className=" bg-[#fd6e54] shadow appearance-none border border-red 
            rounded-full w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            {...register("password")}
            type="password"
          />
          <span className="text-red-200">
            {" "}
            {errors ? errors.password?.message : ""}
          </span>
        </div>

        <button
          type="submit"
          className="w-[30%]  bg-[#ffff] hover:bg-blue-dark text-[#fd6e54] font-bold pb-1  rounded-full "
        >
          ورود
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserLogin;
