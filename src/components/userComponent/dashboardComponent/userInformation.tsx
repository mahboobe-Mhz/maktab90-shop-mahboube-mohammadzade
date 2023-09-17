import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const LoginSchema = yup.object({
    name: yup
      .string()
      .required("نام خود را وارد کنید")
  ,
    lastName: yup
      .string()
      .required("نام خانوادگی خود را وارد کنید")
      ,
      email: yup
        .string()
        .required("   ایمیل خود را وارد کنید")
        ,
        phoneNumber: yup
          .string()
          .required("  شماره تماس خود را وارد کنید")
          ,
          postalCode: yup
          .string()
          .required(" کدپستی  خود را وارد کنید")
          ,
          address: yup
          .string()
          .required(" آدرس  خود را وارد کنید")
  });

function UserInformation() {
    const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const handleSaveUserInfo=(event:any)=>{
    console.log(event?.currentTarget);

    
    
  }
  console.log(errors);
  return (
    <form   onSubmit={handleSubmit(handleSaveUserInfo)} className='flex flex-col gap-5  items-center my-20' dir="rtl">
        <div className='flex md:gap-20 w-full md:justify-center flex-col md:flex-row items-center'>
    
        <div className='flex flex-col text-right md:w-[30%] w-[80%] '>
        <label htmlFor="" className='pr-2'>  نام </label>
        <input type="text"
           {...register("name")}
        name="name" className='  py-1 border border-secondary rounded-full px-5' />
        <span className="text-secondary text-xs" >
            {" "}
           {errors? errors.name?.message:"" }
          </span>
        </div>
        <div className='flex flex-col text-right md:w-[30%] w-[80%]'>
        <label htmlFor="" className='pr-2'>  نام خانوادگی</label>
        <input {...register("lastName")} type="text" name="lastName" className='border   py-1 border-secondary rounded-full px-5' />
        <span className="text-secondary text-xs" >
            {" "}
           {errors? errors.lastName?.message:"" }
          </span>
        </div>
        </div>
        <div className='flex md:gap-20 w-full md:justify-center flex-col md:flex-row items-center'>
    
    <div className='flex flex-col text-right md:w-[30%] w-[80%] '>
    <label htmlFor="" className='pr-2'>  ایمیل </label>
    <input type="email"
       {...register("email")}
    name="name" className='border  py-1  border-secondary rounded-full px-5' />
    <span className="text-secondary text-xs" >
        {" "}
       {errors? errors.email?.message:"" }
      </span>
    </div>
    <div className='flex flex-col text-right md:w-[30%] w-[80%]'>
    <label htmlFor="" className='pr-2'>   شماره تماس</label>
    <input {...register("phoneNumber")} type="text" name="phoneNumber" className='border  py-1  border-secondary rounded-full px-5' />
    <span className="text-secondary text-xs" >
        {" "}
       {errors? errors.phoneNumber?.message:"" }
      </span>
    </div>
    </div>
    <div className='flex md:gap-20 w-full md:justify-center flex-col md:flex-row items-center'>
    
    <div className='flex flex-col text-right md:w-[30%] w-[80%] '>
    <label htmlFor="" className='pr-2'>  کد پستی </label>
    <input type="number"
       {...register("postalCode")}
    name="postalCode" className='border  py-1  border-secondary rounded-full px-5' />
    <span className="text-secondary text-xs" >
        {" "}
       {errors? errors.postalCode?.message:"" }
      </span>
    </div>
    <div className='flex flex-col text-right md:w-[30%] w-[80%]'>
    <label htmlFor="" className='pr-2'>   آدرس</label>
    <textarea {...register("address")}  name="address" className='border  py-1  border-secondary rounded-2xl px-5' />
    <span className="text-secondary text-xs" >
        {" "}
       {errors? errors.address?.message:"" }
      </span>
    </div>
    </div>
 
 
      
    
       <button type='submit' value="submit" className="text-white bg-secondary px-32 py-1 rounded-full"> ثبت</button>
      
    </form>
  )
}

export default UserInformation