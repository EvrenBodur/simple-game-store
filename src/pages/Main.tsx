import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "../store";
import { translate } from "../i18n";
import MyLibrary from "./MyLibrary";
import Register from "./Register";
import Login from "./Login";
import Header from "../components/Header";
import "../styles/Main.css";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route
          path={translate("register_route", language)}
          element={<Register />}
        />
        <Route path={translate("login_route", language)} element={<Login />} />
        <Route
          path="/mylibrary"
          element={user.length > 0 ? <MyLibrary /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default Main;
