import React from "react";
import { Navigate } from "react-router-dom";

import {
  DashboardCrypto,
  Login,
  Register,
  ForgetPassword,
  Logout,
  Contact,
  Personal,
  VerifyEmail,
  Market,
  Savings,
  Portfolio,
  Wallet,
  Deposit,
  Withdraw,
  Transfer,
  OpenAccount,
  Investing,
  Profile,
  Histories,
  TwoFa,
  Tiers,
} from "../pages";

import Markets from "../pages/Landing/Markets";
import Home from "../pages/Landing/Home";
import Trading from "../pages/Landing/Trading";
import InvestingOut from "../pages/Landing/InvestingOut";
import AutomatedInvesting from "../pages/Landing/AutomatedInvesting";
import Retirement from "../pages/Landing/Retirement";
import StockDetail from "../pages/Landing/StockDetail";
import Features from "../pages/Landing/Features";
import About from "../pages/Landing/About";
import Security from "../pages/Landing/Security";
import Learn from "../pages/Landing/Learn";
import FAQ from "../pages/Landing/FAQ";
import ApiDocs from "../pages/Landing/ApiDocs";
import Blog from "../pages/Landing/Blog";
import ContactUs from "../pages/Landing/ContactUs";
import Cash from "../pages/Landing/products/Cash";
import Stocks from "../pages/Landing/products/Stocks";
import ETFs from "../pages/Landing/products/ETFs";
import Options from "../pages/Landing/products/Options";
import Crypto from "../pages/Landing/products/Crypto";
import Bonds from "../pages/Landing/products/Bonds";
import Commodities from "../pages/Landing/products/Commodities";
import Privacy from "../pages/Landing/legal/Privacy";
import Terms from "../pages/Landing/legal/Terms";
import Cookies from "../pages/Landing/legal/Cookies";
import Disclosures from "../pages/Landing/legal/Disclosures";
import SIPCProtection from "../pages/Landing/legal/SIPCProtection";

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardCrypto /> },
  { path: "/index", component: <DashboardCrypto /> },
  { path: "/profile", component: <Profile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "/contact", component: <Contact /> },
  { path: "/personal", component: <Personal /> },
  { path: "/twofactor", component: <TwoFa /> },
  { path: "/trade/:assetId?", component: <Market /> },
  { path: "/savings", component: <Savings /> },
  { path: "/portfolio", component: <Portfolio /> },
  { path: "/cash", component: <Wallet /> },
  { path: "/deposit", component: <Deposit /> },
  { path: "/withdraw", component: <Withdraw /> },
  { path: "/transfer", component: <Transfer /> },
  { path: "/open-account", component: <OpenAccount /> },
  { path: "/automated-investing", component: <Investing /> },
  { path: "/history", component: <Histories /> },
  { path: "/tiers", component: <Tiers /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/", component: <Home /> },
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPassword /> },
  { path: "/register", component: <Register /> },
  { path: "/verifyemail", component: <VerifyEmail /> },

  { path: "/markets", component: <Markets /> },
  { path: "/trading", component: <Trading /> },
  { path: "/investing", component: <InvestingOut /> },
  { path: "/auto-investing", component: <AutomatedInvesting /> },
  { path: "/retirement", component: <Retirement /> },
  { path: "/stocks/:symbol", component: <StockDetail /> },
  { path: "/features", component: <Features /> },
  { path: "/about", component: <About /> },
  { path: "/security", component: <Security /> },
  { path: "/learn", component: <Learn /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/contact-us", component: <ContactUs /> },
  { path: "/blog", component: <Blog /> },
  { path: "/api-docs", component: <ApiDocs /> },
  { path: "/products/cash", component: <Cash /> },
  { path: "/products/stocks", component: <Stocks /> },
  { path: "/products/etfs", component: <ETFs /> },
  { path: "/products/options", component: <Options /> },
  { path: "/products/crypto", component: <Crypto /> },
  { path: "/products/bonds", component: <Bonds /> },
  { path: "/products/commodities", component: <Commodities /> },
  { path: "/legal/privacy", component: <Privacy /> },
  { path: "/legal/terms", component: <Terms /> },
  { path: "/legal/cookies", component: <Cookies /> },
  { path: "/legal/disclosures", component: <Disclosures /> },
  { path: "/legal/sipc", component: <SIPCProtection /> },
];

export { authProtectedRoutes, publicRoutes };
