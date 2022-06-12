import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLanguage } from "../actions/language";
import { translate } from "../i18n";
import "../styles/Header.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLanguageChange = (e: any) => {
    dispatch(setLanguage(e.target.value));
    window.location.href = "/";
  };

  const handleLogout = (): void => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <div className="flex-p10-space-between bg-color">
      <div className="flex-p10-space-between">
        <Link
          className="margin-10 text-decoration-none text-color"
          to={translate("store_route", language)}
        >
          {translate("store", language)}
        </Link>
        <Link
          className="margin-10 text-decoration-none text-color"
          to={translate("mylibrary_route", language)}
        >
          {translate("mylibrary", language)}
        </Link>
      </div>
      <div className="flex-p10-space-between">
        <div className="margin-10">
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
        <div className="margin-10">
          {user.length > 0 ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link
              className="margin-10 text-decoration-none text-color"
              to={translate("login_route", language)}
            >
              {translate("login", language)}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
