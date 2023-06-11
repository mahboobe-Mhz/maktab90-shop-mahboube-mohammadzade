import { Navigate, createBrowserRouter } from "react-router-dom";
import { SuspenseView } from "./components/suspense";
import React, { Suspense } from "react";
import Cookies from "universal-cookie";

const MainLayout = React.lazy(() => import("../layout/main"));
const ShowProducts = React.lazy(
  () => import("../screens/main/users/show-Products")
);
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
const LoginScreen = React.lazy(() => import("../screens/auth/login"));
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

const cookies = new Cookies();
export const routes = {
  ADMIN: {
    main: "/admin/mainPage",
    index: "/admin/index",
    orders: "/admin/index/orders",
    products: "/admin/index/products",
    category: "/admin/index/category",
    label: "/admin/index/label",
    comments: "/admin/index/comments",
    reports: "/admin/index/reports",
    discount: "/admin/index/discounts",
  },
  USERS: {
    index: "/auth/login",
    shopping: "shopping",
    single: `shopping/:id`,
    cart: "cart",
    checkout: "/cart/checkout",
  },
};
const user = cookies.get("user");
const userRol = user || {};
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseView>
        <MainLayout />
      </SuspenseView>
    ),
    children: [
      {
        path: routes.USERS.index,
        element: (
          <SuspenseView>
            <LoginScreen />
          </SuspenseView>
        ),
      },
      {
        path: routes.USERS.shopping,
        element: (
          <SuspenseView>
            <ShowProducts />
          </SuspenseView>
        ),
      },
      {
        path: routes.USERS.single,
        element: (
          <SuspenseView>
            <ShowSingleProduct />
          </SuspenseView>
        ),
      },
      {
        path: routes.USERS.cart,
        element:
          userRol?.role === "USER" ? (
            <SuspenseView>
              <Cart />
            </SuspenseView>
          ) : (
            <Navigate to={routes.USERS.index} />
          ),
        children: [
          {
            path: routes.USERS.checkout,
            element: (
              <SuspenseView>
                <Checkout />
              </SuspenseView>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element:
      userRol?.role === "ADMIN" ? (
        <AdminLayout />
      ) : (
        <Navigate to={routes.USERS.index} />
      ),
    children: [
      {
        path: routes.ADMIN.main,
        element: <MainAdminPage />,
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
              <SuspenseView>
                <ProductsTable />
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
        ],
      },
    ],
  },
]);
