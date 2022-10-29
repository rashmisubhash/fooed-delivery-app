import React from "react";

const Login = React.lazy(() => import('./../pages/Auth/Login'));
// const Signup = React.lazy(() => import('./../pages/Auth/Signup'));
const ForgotPassword = React.lazy(() => import('./../pages/Auth/ForgotPassword'));
const NewPassword = React.lazy(() => import('./../pages/Auth/NewPassword'));

// const Overview = React.lazy(() => import('./../revampPages/Overview/Overview'));

// const LandingPage = React.lazy(() => import('../pages/LandingPage'))


const Routes = [
    { path: "/login", name: "Login", component: Login, layout: false, authentication: "unauthenticated" },
    // { path: "/signup", name: "Signup", component: Signup, layout: false, authentication: "unauthenticated" },
    { path: "/forgot-password", name: "ForgotPassword", component: ForgotPassword, layout: false, authentication: "unauthenticated" },
    { path: "/new-password", name: "NewPassword", component: NewPassword, layout: false, authentication: "unauthenticated" },

    //Dashboard/Overview
    // { path: "/e/:eventId/", name: "Overview", component: Overview, layout: true, authentication: "authenticated", exact: true },
    
    // { path: "/LandingPage/", name: "LandingPage", component: LandingPage, layout: true, authentication: "authenticated", exact: true },


   
];

export default Routes;
