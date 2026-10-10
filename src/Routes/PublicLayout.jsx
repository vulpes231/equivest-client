import React, { useEffect, useCallback } from "react";
import Navbar from "../pages/Landing/Navbar";
import Footer from "../pages/Landing/Footer";
import { useLocation } from "react-router-dom";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { changeLayoutMode } from "../features/layouts/thunk";

const selectLayoutState = (state) => state.Layout;

const selectLayoutProperties = createSelector(
  [selectLayoutState],
  (layout) => ({
    layoutModeType: layout.layoutModeType,
  }),
);

const PublicLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { layoutModeType } = useSelector(selectLayoutProperties);

  const showAuth = ["/verifyemail", "/login", "/register", "/forgot-password"];

  const onChangeLayoutMode = useCallback(
    (value) => {
      dispatch(changeLayoutMode(value));
    },
    [dispatch],
  );

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [layoutModeType]);

  return (
    <>
      {!showAuth.includes(location.pathname) && (
        <Navbar darkMode={layoutModeType} setDarkMode={onChangeLayoutMode} />
      )}

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default PublicLayout;
