import MainFooter from "../../../../components/userComponent/mainFooter";
import MainHeader from "../../../../components/userComponent/mainHeader";

const AboutUs = () => {
    return ( <div className=" flex flex-col ">
        <MainHeader/>
    <div className="container mx-auto mt-10 ">
    <div className="absolute md:right-[35%] xl:top-[210px] top-[100px] right-[20%] sm:text-[70px] text-[40px]" >درباره <span className="text-secondary">هوم نت</span></div>
        <div className=" flex xl:justify-between justify-center md:items-start items-center flex-wrap gap-3 mt-[90px]">
   
         
            <div className="  ">

          <img className="md:w-[450px]  md:h-[600px] rounded-3xl"  src="public\picture\ax-01.png" alt="" />
          </div>
             <div className=" flex flex-col items-end ">
      <img  className=" md:w-[700px]  md:h-[420px]  "src="public\picture\ax-02.png" alt="" />
      <p className=" md:w-[700px] text-right pt-5 md:text-xl text-lg" >  هوم نت شرکتی است که با تعدادی جوان فارغ تحصیل در رشته های مرتبط آغاز به کار کردهو هدف آن قرار گیری مردم در 
                فضای مناسب برای زندگی و کار و ...برای داشتن روحی سالم است و در کنار آن با وجود فروشگاه انلاین و افراد متخصص در امر مشاوره در خرید محصولات و تیم حرفه ایی برای انجام طراحی داخلی فضاهای مرتبط و همکاری با شرکت های معتبر سهمی بر بهبودکیفیت زندگی انسان ها و صرفه جویی در وقت 
            و زمان که با ازرش ترین عتصر زندگی ست کرده است  </p>
             </div>
          
    
   
    
           
          
        </div>
        <div className=" flex justify-evenly pb-4 flex-wrap">
            <div className=" w-[300px]" >
                <div className="relative ">
                    <span className=" text-secondary text-[100px] opacity-40 ml-36 "> ۰۳</span>
                    <span className=" absolute top-[50%] right-5 text-xl text-right w-[150px] "> تضمین کیفیت و اصالت محصول</span>
                </div>
                <div> 
                    <p className="text-right pr-5 text-secondary text-xl">کلیه محصولات هوم نت تنها پس از تایید کیفیت و اصالت برند محصولات ساخته شده، در هوم نت   قرار میگیرند</p>
                </div>
            </div>
            <div className=" w-[320px]" >
                <div className="relative ">
                    <span className=" text-secondary text-[100px] opacity-40 ml-36 "> ۰۲</span>
                    <span className=" absolute top-[50%] right-5 text-xl text-right w-[230px] "> انجام کلیه مراحل طراحی و اجرا و تجهیز فضای خانگی و صنعتی</span>
                </div>
                <div> 
                    <p className="text-right pr-5 text-secondary text-xl">
                 کلیه مراحل طراحی و اجرا و تجهیز توسط مشاورین و تیم های مجرب و کارآزموده هوم نت انجام می شود که موجب صرفه جویی در زمان و هزینه کارفرما خواهد شد.
                    </p>
                </div>
            </div>
            <div className=" w-[300px]" >
                <div className="relative ">
                    <span className=" text-secondary text-[100px] opacity-40 ml-36 "> ۰۱</span>
                    <span className=" absolute top-[50%] right-5 text-xl text-right w-[200px] "> 
                  معرفی و ارائه با کیفیت ترین و بروزترین محصولات
                    </span>
                </div>
                <div> 
                    <p className="text-right pr-5 text-secondary text-xl ">
                       ارائه محصولات و تجهیزات خانگی و صنعتی(کافی شاپ، فست فود،هتل و ...)
                        ایرانی از بهترین و با کیفیت ترین برندهای ایرانی
                        </p>
                </div>
            </div>
          
        </div>
        <div className="flex flex-col justify-center items-center  my-3">
            <span className="md:text-[50px] text-[40px]">داستان <span className="text-secondary">هوم نت</span> </span>
            <p className=" border-2 border-gray-300 rounded-3xl py-3 px-3 pt-3 md:text-xl text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde animi perspiciatis placeat earum aspernatur sit commodi blanditiis facere modi? Necessitatibus, inventore totam aperiam quibusdam laborum at est perspiciatis officia.
            </p>
        </div>
    </div>
        <div dir="rtl">
            <MainFooter/>
        </div>
    </div> );
}
 
export default AboutUs;