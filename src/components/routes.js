// Main
import AdminDashboard from "./main/admin/AdminDashboard"
import SuperAdminDashboard from "./main/superadmin/SuperAdminDashboard"
import UserDashboard from "./main/user/UserDashboard"
import Index from "./main/public/Index"

// Sidebar
import SuperAdminSidebar from "./sidebar/SuperAdminSidebar"
import AdminSidebar from "./sidebar/AdminSidebar"
import UserSidebar from "./sidebar/UserSidebar"

// Header
import AdminHeader from './header/AdminHeader'
import SuperAdminHeader from './header/SuperAdminHeader'
import UserHeader from './header/UserHeader'
import HomeHeader from './header/HomeHeader'

// footer
import UserFooter from './footer/UserFooter'
import AdminFooter from './footer/AdminFooter'
import SuperAdminFooter from './footer/SuperAdminFooter'
import HomeFooter from './footer/HomeFooter'

const routes = [
    {
        path: '/admin',
        header: AdminHeader,
        sidebar: AdminSidebar,
        main: AdminDashboard,
        footer: AdminFooter
    },
    {
        path: '/superadmin',
        header: SuperAdminHeader,
        sidebar: SuperAdminSidebar,
        main: SuperAdminDashboard,
        footer: SuperAdminFooter
    },
    {
        path: '/dashboard',
        header: UserHeader,
        sidebar: UserSidebar,
        main: UserDashboard,
        footer: UserFooter
    },
    {
        path: '/',
        header: HomeHeader,
        sidebar: undefined,
        main: Index,
        footer: HomeFooter,
    },
];

export default routes;

// const routes2 = [
//     {
//       path: "/",
//       exact: true,
//       sidebar: () => <div>home!</div>,
//       main: () => <h2>Home</h2>
//     },
//     {
//       path: "/bubblegum",
//       sidebar: () => <div>bubblegum!</div>,
//       main: () => <h2>Bubblegum</h2>
//             routes: [
//                 {
//                 path: "/tacos/bus",
//                 component: Bus
//                 },
//                 {
//                 path: "/tacos/cart",
//                 component: Cart
//                 }
//             ]
//     },
//     {
//       path: "/shoelaces",
//       sidebar: () => <div>shoelaces!</div>,
//       main: () => <h2>Shoelaces</h2>
//     }
//   ];


// <ul style={{ listStyleType: "none", padding: 0 }}>
// <li>
//     <Link to="/">Home</Link>
// </li>
// <li>
//     <Link to="/bubblegum">Bubblegum</Link>
// </li>
// <li>
//     <Link to="/shoelaces">Shoelaces</Link>
// </li>
// </ul>

// <Switch>
// {routes.map((route, index) => (
//     // You can render a <Route> in as many places
//     // as you want in your app. It will render along
//     // with any other <Route>s that also match the URL.
//     // So, a sidebar or breadcrumbs or anything else
//     // that requires you to render multiple things
//     // in multiple places at the same URL is nothing
//     // more than multiple <Route>s.
//     <Route
//     key={index}
//     path={route.path}
//     exact={route.exact}
//     children={<route.sidebar />}
//     />
// ))}
// </Switch>

// <Switch>
// {routes.map((route, index) => (
//     // Render more <Route>s with the same paths as
//     // above, but different components this time.
//     <Route
//     key={index}
//     path={route.path}
//     exact={route.exact}
//     children={<route.main />}
//     />
// ))}
// </Switch>


// Route Récursive
// https://reactrouter.com/web/example/route-config









// import { Layout } from 'antd'
// import Loadable from 'react-loadable'

// const { Content } = Layout

// const Loading = () => <div>Loading...</div>

// const Tools = Loadable({
//     loader: () => import('../pages/tools/smallTools'),
//     loading: Loading
//   })

//   const Contents = () => (
//     <Content className="content" id="content">
//       <Route path="/tools" component={Tools} />
//     </Content>
//   )
  




