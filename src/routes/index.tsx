import { Navigate, createBrowserRouter } from "react-router-dom";
import {SuspenseView} from "./components/suspense";
import React from "react";
import Cookies from 'universal-cookie';

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

 
const cookies = new Cookies();
export const routes =  {

    ADMIN:{
        index:'/admin/products',
        inventory:'/admin/inventory',
        orders:'/admin/orders'
     
   
    },
    USERS:{
        index:'/auth/login',
        shopping:'shopping',
        single:`shopping/:id`,
        cart:'cart',
        checkout:'/cart/checkout',
       
    }
}
const user= cookies.get("user")
const parsedUser = user||{}
export const router = createBrowserRouter([
    {
        path:'/',
        element: 
        <SuspenseView>
        <MainLayout/>
        </SuspenseView>,
        children:[
            {
                path:routes.USERS.index,
                element:
                <SuspenseView>
                <LoginScreen/>
                </SuspenseView>,
            },
            {
                path:routes.USERS.shopping,
                element:
                <SuspenseView>
                <ShowProducts/>
                </SuspenseView>
            },
            {
                path:routes.USERS.single,
                element:
                <SuspenseView>
                <ShowSingleProduct/>
                </SuspenseView>
            },
            {
                path:routes.USERS.cart,
                element:parsedUser?.role==="USER"?
                <SuspenseView>
                <Cart/>
                </SuspenseView>
                :<Navigate to={routes.USERS.index}/>,
                children:[
                   {
                    path:routes.USERS.checkout,
                    element:
                    <SuspenseView>
                    <Checkout/>
                    </SuspenseView>
                   }
                ]
            },

        ]

    },
    {
        path:'/admin',
       // element:parsedUser?.role==="ADMIN"? <AdminLayout/>:<Navigate to={routes.AUTH.index}/>,
       element: <AdminLayout/>,
        children:[{
            path:routes.ADMIN.index,
            element:
            <SuspenseView>
            <ProductsManagement/>
            </SuspenseView>
        },{
            path:routes.ADMIN.inventory,
            element:
            <SuspenseView>
            <InventoryControl/>
            </SuspenseView>
        },{
            path:routes.ADMIN.orders,
            element:
            <SuspenseView>
            <OrdersManagement/>
            </SuspenseView>
        },
       
    ]

    },
   
])
