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

  // <Route path="/products/cash" element={<Cash />} />
  // <Route path="/products/stocks" element={<Stocks />} />
  // <Route path="/products/etfs" element={<ETFs />} />
  // <Route path="/products/options" element={<Options />} />
  // <Route path="/products/crypto" element={<Crypto />} />
  // <Route path="/products/bonds" element={<Bonds />} />
  // <Route path="/products/commodities" element={<Commodities />} />
  // <Route path="/legal/privacy" element={<Privacy />} />
  // <Route path="/legal/terms" element={<Terms />} />
  // <Route path="/legal/cookies" element={<Cookies />} />
  // <Route path="/legal/disclosures" element={<Disclosures />} />
  // <Route path="/legal/sipc" element={<SIPCProtection />} />
];

export { authProtectedRoutes, publicRoutes };
