const MainFooter = () => {
    return ( <div className="position:fixed button:0px bg-black text-white md:py-5 md:px-10">
        <div className="flex gap-5">
            <div className="flex flex-col">
                <h3 className="font-bold mb-2 ">دفتر مرکزی</h3>
                <span className=" text-sm pb-2 border-b w-[200px] border-white">شیراز خیابان قصرودشت مجتمع تجاری اناهیتا۲ پلاک ۴۳</span>
                <span className="  mt-1 mb-2 font-bold">شماره تماس</span>
                <span className=" text-sm "> ۰۷۱۳۲۳۰۲۰۴۶</span>
                <span className=" text-sm border-b w-[100px] border-white pb-2">۰۹۱۷۷۹۰۳۴۸۴</span>
            </div>
            <div className="flex flex-col">
            <h3 className="font-bold mb-2 ">پیوندهای مفید </h3>
            <span className=" text-sm "> فروشگاه هومنت</span>
            <span className=" text-sm ">فروشگاه</span>
            <span className=" text-sm ">درباره ما</span>
            <span className=" text-sm   border-b border-white pb-2">تماس با ما</span>
            </div>
            <div className="flex flex-col">
            <h3 className="font-bold mb-2 "> حساب کاربری </h3> 
            <span className=" text-sm "> حساب کاربری من </span>
            <span className=" text-sm "> تسویه حساب </span>
            <span className=" text-sm "> رهگیری سفارشات </span>
            <span className=" text-sm  border-b border-white pb-2 "> لیست علاقه مندی </span>
            </div>
            <div> <h3 className="font-bold mb-2 ">  نماد الکترونیکی </h3> 
            <span>
                <img width={50} src="picture/enamad.webp"/>
            </span>
             </div>
            <div></div>
        </div>
    <div></div>
 
    </div> );
}
 
export default MainFooter;