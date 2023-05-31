import { Navigate, createBrowserRouter } from "react-router-dom";
import React from "react";
const AuthLayout = React.lazy(()=> import('../layout/auth'))
const MainLayout = React.lazy(()=> import('../layout/main'))
const ShowProducts = React.lazy(()=> import('../screens/main/users/show-Products'))
const ShowSingleProduct = React.lazy(()=> import('../screens/main/users/show-single-product'))
const Cart = React.lazy(()=> import('../screens/main/users/cart'))
const Checkout = React.lazy(()=> import('../screens/main/users/checkout'))
const AdminLayout = React.lazy(()=> import('../layout/admin'))
const ProductsManagement = React.lazy(()=> import('../screens/main/admin/products-management'))
const InventoryControl = React.lazy(()=> import('../screens/main/admin/inventory-control'))
const OrdersManagement = React.lazy(()=> import('../screens/main/admin/orders-management'))
const LoginScreen = React.lazy(()=> import('../screens/auth/login'))
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
export const routes =  {
    AUTH:{
        index:'/auth/login',
    },
    ADMIN:{
        index:'/admin/products',
        inventory:'/admin/inventory',
        orders:'/admin/orders'
     
   
    },
    USERS:{
        shopping:'shopping',
        single:'shopping/single-product',
        cart:'cart',
        checkout:'/cart/checkout',
       
    }
}

//const user = (localStorage.getItem('user'));
const user= cookies.get("user")


//const parsedUser = user ? JSON.parse(user) : {}
const parsedUser = user||{}

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:routes.USERS.shopping,
                element:<ShowProducts/>
            },
            {
                path:routes.USERS.single,
                element:<ShowSingleProduct/>
            },
            {
                path:routes.USERS.cart,
                element:parsedUser?.role==="USER"?<Cart/>:<Navigate to={routes.AUTH.index}/>,
                children:[
                   {
                    path:routes.USERS.checkout,
                    element:<Checkout/>,
                   }
                ]
            },

        ]

    },
    {
        path:'/admin',
        element:parsedUser?.role==="ADMIN"? <AdminLayout/>:<Navigate to={routes.AUTH.index}/>,
        children:[{
            path:routes.ADMIN.index,
            element:<ProductsManagement/>
        },{
            path:routes.ADMIN.inventory,
            element:<InventoryControl/>
        },{
            path:routes.ADMIN.orders,
            element:<OrdersManagement/>
        },
       
    ]

    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:routes.AUTH.index,
                element:<LoginScreen/>,
            }
        ]
    }
])
