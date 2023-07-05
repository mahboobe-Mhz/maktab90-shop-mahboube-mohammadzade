import MainFooter from "../../../components/userComponent/mainFooter";
import MainHeader from "../../../components/userComponent/mainHeader";

const ErrorPage = () => {
    return ( <div>
        <MainHeader/>
        <div className="flex flex-col gap-5 justify-center items-center w-full h-full mb-28 ">
            <h1 className="text-[150px] font-bold text-secondary"> Oops!</h1>
            <p className="font-bold">404-page not found</p>
            <p className=" font-bold ">the page you are looking for might have been removed had is name change or is temporarily unavailable </p>

        </div>
        <div dir="rtl">
        <MainFooter/>
        </div>
      
    </div> );
}
 
export default ErrorPage;