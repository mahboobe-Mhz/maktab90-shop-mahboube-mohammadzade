import { Navigate, createBrowserRouter } from "react-router-dom";
import { SuspenseView } from "./components/suspense";
import React from "react";
import Cookies from "universal-cookie";

const Home = React.lazy(() => import("../screens/main/users/home"));
const ShowSingleProduct = React.lazy(
  () => import("../screens/main/users/show-single-product")
);
const Cart = React.lazy(() => import("../screens/main/users/cart"));
const Checkout = React.lazy(() => import("../screens/main/users/checkout"));
const AdminLayout = React.lazy(() => import("../layout/admin"));
const ProductsManagement = React.lazy(
  () => import("../screens/main/admin/products-management")
);
const OrdersManagement = React.lazy(
  () => import("../components/adminComponent/orderTable")
);

const MainAdminPage = React.lazy(
  () => import("../screens/main/admin/mainPage")
);
const ProductsTable = React.lazy(
  () => import("../components/adminComponent/productsTable")
);
const CategoryTable = React.lazy(
  () => import("../components/adminComponent/categoryTable")
);
const LabelTable = React.lazy(
  () => import("../components/adminComponent/labelTable")
);
const Comments = React.lazy(
  () => import("../components/adminComponent/comments")
);
const Reports = React.lazy(
  () => import("../components/adminComponent/reportsPage")
);
const Discounts = React.lazy(
  () => import("../components/adminComponent/discountPage")
);
const Price = React.lazy(
  () => import("../components/adminComponent/price&inventory")
);
const AddProducts = React.lazy(
  () => import("../components/adminComponent/productsTable/addProducts")
);
const CategoryScreen = React.lazy(
  () => import("../screens/main/users/categoryScreen")
);
const SubCategoryScreen = React.lazy(
  () => import("../screens/main/users/subCategoryScreen")
);
const ErrorPage = React.lazy(() => import("../screens/main/404"));
const LoginUserPage = React.lazy(
  () => import("../screens/auth/login/userLogin/index")
)

;const SuccessPaymentPage = React.lazy(
  () => import("../screens/main/users/successPayment")
);const UnSuccessPaymentPage = React.lazy(
  () => import("../screens/main/users/unsuccessPayment")
);const ConnectionPage = React.lazy(
  () => import("../screens/main/users/connection")
);const AboutUs = React.lazy(
  () => import("../screens/main/users/aboutUs")
);
const SearchPage=React.lazy(()=>import("../screens/main/users/searchPage"))
const SmsCode=React.lazy(()=>import("../screens/main/users/smsCode"))
const AdminLogin=React.lazy(()=>import("../screens/auth/adminLogin"))
const Dashboard=React.lazy(()=>import("../screens/main/users/dashboard"))

const cookies = new Cookies();
export const routes = {
  ADMIN: {
    login: "/admin/auth/login",
    main: "/admin/mainPage",
    index: "/admin/control",
    orders: "/admin/control/orders",
    products: "/admin/control/products",
    category: "/admin/control/category",
    label: "/admin/control/label",
    comments: "/admin/control/comments",
    reports: "/admin/control/reports",
    discount: "/admin/control/discounts",
    price: "/admin/control/price",
    addProduct: "/admin/control/addProduct",
  },
  USERS: {
    home: "/",
    ShowProducts: "/category",
    filterCat: "/category/:id",
    single: `/product/:id`,
    cart: "/cart",
    checkout: "/checkout",
    showSubCat: "/subCategory",
    showSubCatProducts: "/subCategory:id",
    login: "/login",
    payment:"/payment",
    successPayment:"/successPayment",
    unSuccessPayment:"/unSuccessPayment",
    connectUs:"/connectedUs",
    aboutUs:"/aboutUs",
    SearchPage:"/searching",
    SmsCode:"/smsCode",
    AdminLogin:"/adminLogin",
    Dashboard:"/Dashboard"
  },
};
const user = cookies.get("user");
const userRol = user || {};
console.log(userRol.role);


export const router = createBrowserRouter([
  {
    path: routes.USERS.home,
    element: (
      <SuspenseView>
        <Home />
      </SuspenseView>
    ),
  },
  {
    path: routes.USERS.ShowProducts,
    children: [
      {
        path: routes.USERS.filterCat,
        element: (
          <SuspenseView>
            <CategoryScreen />
          </SuspenseView>
        ),
      },
    ],
  },
  {
    path: routes.USERS.showSubCat,
    children: [
      {
        path: routes.USERS.showSubCatProducts,
        element: (
          <SuspenseView>
            <SubCategoryScreen />
          </SuspenseView>
        ),
      },
    ],
  },
  {
    path: "/product",
    children: [
      {
        path: routes.USERS.single,
        element: (
          <SuspenseView>
            <ShowSingleProduct />
          </SuspenseView>
        ),
      },
    ],
  },

  {
    path: routes.USERS.cart,
    element:

      <SuspenseView>
        <Cart/>
        </SuspenseView>

    
  }, {
    path: routes.USERS.connectUs,
    element:

      <SuspenseView>
        <ConnectionPage/>
        </SuspenseView>

    
  }, {
    path: routes.USERS.aboutUs,
    element:

      <SuspenseView>
        <AboutUs/>
        </SuspenseView>

    
  }, {
    path: routes.USERS.SearchPage,
    element:

      <SuspenseView>
        <SearchPage/>
        </SuspenseView>

    
  }, {
    path: routes.USERS.SmsCode,
    element:

      <SuspenseView>
        <SmsCode/>
        </SuspenseView>

    
  },{
    path: routes.USERS.AdminLogin,
    element:

      <SuspenseView>
        <AdminLogin/>
        </SuspenseView>

    
  },{
    path: routes.USERS.Dashboard,
    element:

      <SuspenseView>
        <Dashboard/>
        </SuspenseView>

    
  },
  {
    path: routes.USERS.checkout,
    element:
    userRol?.role === "USER" ?  (
      <SuspenseView>
        <Checkout />
      </SuspenseView>)
      
     : 
     <Navigate to={"/login"} />
  
  },

  {
    path: "/admin",
    element: 
    userRol?.role === "ADMIN" ? (
    <SuspenseView>
     <AdminLayout />
  </SuspenseView>
    ) : (
      <Navigate to={"/login"} />
    ),
    children: [
    
      {
        path: routes.ADMIN.main,
        element:(   <SuspenseView>
      <MainAdminPage />
        </SuspenseView>)
        
    
      },
      {
        path: routes.ADMIN.index,
        element: (
          <SuspenseView>
            <ProductsManagement />
          </SuspenseView>
        ),
        children: [
          {
            path: routes.ADMIN.products,
            element: (
              
                <ProductsTable />
           
            ),
          },
          {
            path: routes.ADMIN.price,
            element: (
              <SuspenseView>
                <Price />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.orders,
            element: (
              <SuspenseView>
                <OrdersManagement />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.category,
            element: (
              <SuspenseView>
                <CategoryTable />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.label,
            element: (
              <SuspenseView>
                <LabelTable />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.comments,
            element: (
              <SuspenseView>
                <Comments />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.reports,
            element: (
              <SuspenseView>
                <Reports />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.discount,
            element: (
              <SuspenseView>
                <Discounts />
              </SuspenseView>
            ),
          },
          {
            path: routes.ADMIN.addProduct,
            element: (
              <SuspenseView>
                <AddProducts />
              </SuspenseView>
            ),
          },
        ],
      },
    ],
  },

  {
    path: routes.USERS.login,
    element: (
      <SuspenseView>
        <LoginUserPage />
      </SuspenseView>
    ),
  },{
    path: routes.USERS.successPayment,
    element: (
      <SuspenseView>
        <SuccessPaymentPage/>
      </SuspenseView>
    ),
  },{
    path: routes.USERS.unSuccessPayment,
    element: (
      <SuspenseView>
        <UnSuccessPaymentPage/>
      </SuspenseView>
    ),
  },
  {
    path: "*",

    element:(   <SuspenseView>
      <ErrorPage/>
    </SuspenseView>) ,
  },
]);
