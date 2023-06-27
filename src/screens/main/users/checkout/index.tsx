import Cookies from "universal-cookie";
import MainHeader from "../../../../components/userComponent/layoutHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
const cookies = new Cookies();
const Checkout = () => {

    const user = cookies.get("user");
    console.log(user);
    
    return ( <div>
        <MainHeader/>

        <MainFooter/>
    </div> );
}
 
export default Checkout;