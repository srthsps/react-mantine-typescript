import React from "react"
import { Redirect } from "react-router-dom"

// type DynamicImportType = () => Promise<{ default: React.ComponentType<any>; }>;
// type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>;

// const dashboardImport: DynamicImportType = () => import("../pages/Dashboard/index");
// const Dashboard: LazyComponentType = React.lazy(dashboardImport)

// const tenantsImport: DynamicImportType = () => import("../pages/Tenants/index");
// const Tenants: LazyComponentType = React.lazy(tenantsImport)

const Dashboard = React.lazy(()=> import("../pages/Dashboard/index"))
const Tenants = React.lazy(()=> import("../pages/Tenants/index"))

// Authentication related pages
const Login = React.lazy(()=> import("../pages/Authentification/Login"))
const Logout = React.lazy(()=> import("../pages/Authentification/Logout"))
const Pages404 = React.lazy(()=>import( "../pages/Utility/pages-404"))

const userRoutes = [

  { path: "/dashboard", component: Dashboard },
  { path: "/tenants", component: Tenants },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "*", component: Pages404 },

]

const authRoutes = [

  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/pages-404", component: Pages404 },
  
]

export { userRoutes, authRoutes }
