import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";
import SearchOption from "../components/Common/SearchOption";
import NotificationDropdown from "../components/Common/NotificationDropdown";
import ProfileDropdown from "../components/Common/ProfileDropdown";
import LightDark from "../components/Common/LightDark";

import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { changeSidebarVisibility } from "../features/layouts/thunk";
import { darklogo, logo } from "../assets";
import { getAccessToken } from "../constants";
import { BRAND } from "../pages/Landing/data/config";

const Header = ({ onChangeLayoutMode, layoutModeType, headerClass }) => {
  const dispatch = useDispatch();
  const token = getAccessToken();
  const menuBtnRef = useRef(null);
  const sidebarRef = useRef(null);

  const selectDashboardData = createSelector(
    (state) => state.Layout,
    (sidebarVisibilitytype) => sidebarVisibilitytype.sidebarVisibilitytype,
  );

  const sidebarVisibilitytype = useSelector(selectDashboardData);

  useEffect(() => {
    const closeSidebar = () => {
      document.body.classList.remove("vertical-sidebar-enable");
      document.documentElement.setAttribute("data-sidebar-size", "lg");

      const hamburgerIcon = document.querySelector(".hamburger-icon");
      if (hamburgerIcon) hamburgerIcon.classList.remove("open");

      dispatch(changeSidebarVisibility("hide"));
    };

    const handleClickOutside = (event) => {
      const isSidebarOpen = document.body.classList.contains(
        "vertical-sidebar-enable",
      );
      if (!isSidebarOpen) return;

      const sidebar = document.querySelector(".app-menu");
      const hamburger = menuBtnRef.current;

      if (sidebar && hamburger) {
        const clickedInside =
          sidebar.contains(event.target) || hamburger.contains(event.target);
        if (!clickedInside) {
          closeSidebar();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [dispatch]);

  const toogleMenuBtn = () => {
    const windowSize = document.documentElement.clientWidth;
    const isCurrentlyOpen = document.body.classList.contains(
      "vertical-sidebar-enable",
    );

    dispatch(changeSidebarVisibility("show"));

    // Toggle hamburger icon for larger screens
    if (windowSize > 767) {
      const hamburgerIcon = document.querySelector(".hamburger-icon");
      if (hamburgerIcon) hamburgerIcon.classList.toggle("open");
    }

    // Horizontal layout
    if (document.documentElement.getAttribute("data-layout") === "horizontal") {
      document.body.classList.toggle("menu");
    }

    // Vertical / Semibox
    if (
      document.documentElement.getAttribute("data-layout") === "vertical" ||
      document.documentElement.getAttribute("data-layout") === "semibox"
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.toggle("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.toggle("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    // Two column
    if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
      document.body.classList.toggle("twocolumn-panel");
    }
  };

  return (
    <React.Fragment>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <Link
                  to="/"
                  className="d-flex align-items-center gap-2 text-decoration-none flex-shrink-0"
                  style={{ color: "var(--body)" }}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "linear-gradient(135deg,#1A3A6B,#00C9A7)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3 13L7 9L10 12L15 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <circle cx="15" cy="5" r="2" fill="#00C9A7" />
                    </svg>
                  </div>

                  <span
                    className="text-lg"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {BRAND.name}
                  </span>
                </Link>
              </div>

              <button
                ref={menuBtnRef}
                onClick={toogleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              {/* <SearchOption /> */}
            </div>

            <div className="d-flex align-items-center">
              <LightDark
                layoutMode={layoutModeType}
                onChangeLayoutMode={onChangeLayoutMode}
              />

              {/* <NotificationDropdown /> */}

              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
