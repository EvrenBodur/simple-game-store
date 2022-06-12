import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { translate } from "./i18n";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <Routes>
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default App;
