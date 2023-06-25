import MainButton from "../../../../components/kit/button";
import MainHeader from "../../../../components/userComponent/layoutHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
const Cart = () => {
    return (<div dir="rtl">
               <MainHeader />
               <div className="p-10">
                <h1 className="text-3xl font-bold mb-10">سبد خرید</h1>
                <div className=" flex gap-4 mb-10">
                    <div className="border rounded-2xl border-black w-[70%]">
                        <div className="p-4 space-y-5">
                            <div className="flex justify-between border-b border-black pb-3 px-4"> 
                                <span className="font-semibold">محصول</span>
                                <div className="flex justify-around font-semibold w-[60%]">
                                <span>تعداد</span>
                                <span>قیمت</span>
                                <span>حذف</span>
                                </div>
                               
                            </div>
                            <div className="flex justify-between border-b border-black pb-3 px-4 w-full"> 
                           <div className="flex w-[40%]">
                           <img className="border rounded-2xl " width={80} height={80} src="/picture/تخت.jpg"/>
                                <div className="flex flex-col pr-3">
                                    <span className="font-bold">تخت کودک</span>
                                    <span className="text-xs"> رنگبندی سفید</span>
                                    <span className="text-xs"> تک نفره</span>
                                </div>
                           </div>
                           <div className="flex justify-around w-[60%] mt-4">
                              <span className=" border border-black px-2 h-8 rounded-full w-[100px]">
                              <span className="mx-1  text-xl "> + </span>
                               <span className="mx-1   "> 2</span>
                               <span className="mx-1  text-xl "> -</span>
                              </span>
                                <span>۸۷۰۰۰۰۰۰تومان</span>
                                <span><DeleteOutlineRoundedIcon/></span>
                            </div> 
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl border-black w-[30%]">
                    <div className="p-4">
                        <h3 className="font-semibold mb-5">جمع کل سبد خرید</h3>
                        <div className=" space-y-3 text-semibold">
                            <div className=" flex gap-4">
                                <input className="border border-black rounded-full w-[80%] px-5" type="text"/>
                                <MainButton title="اعمال" />
                            </div>
                            <div className="flex justify-between">
                                <span>جمع جزء</span>
                                <span>۴۴۰۰۰۰ تومان</span>
                            </div>
                            <div className="flex justify-between  border-b-2 pb-3 border-black ">
                                <span> تخفیف (۱۰٪)</span>
                                <span className="text-secondary">۲۴۰۰۰۰ - تومان</span>
                            </div>
                            <div className="flex justify-between">
                                <span> مجموع</span>
                                <span>۸۰۰۰۰۰۰تومان</span>
                            </div >
                            <div className="pt-5 flex gap-1 ">
                            <span className="text-secondary   rounded-full text-xl">●</span>
                            <span className="">هزینه حمل بر عهده مشتری می باشد</span>
                            </div>
                            <div className=" w-full text-center pt-5">
                            <MainButton title="ادامه جهت تسویه حساب"/>
                            </div>
                      
                        </div>
                    </div>
                    </div>
                </div>
              <MainButton title="بروز رسانی سبد خرید"/>
               </div>
               <MainFooter/>
    </div>);
}
 
export default Cart;