import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
import PublicLayout from "./PublicLayout";

// Routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected } from "./AuthProtected";

const Index = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <Routes>
        {/* PUBLIC ROUTES */}
        {publicRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <PublicLayout>
                <NonAuthLayout>{route.component}</NonAuthLayout>
              </PublicLayout>
            }
          />
        ))}

        {/* PROTECTED ROUTES */}
        {authProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <AuthProtected>
                <VerticalLayout>{route.component}</VerticalLayout>
              </AuthProtected>
            }
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default Index;
