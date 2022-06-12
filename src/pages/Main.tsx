import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLanguage } from "../actions/language";
import { translate } from "../i18n";
import MyLibrary from "./MyLibrary";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);

  const handleLanguageChange = (e: any) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <>
      <button value={"tr"} onClick={handleLanguageChange}>
        tr
      </button>
      <button value={"en"} onClick={handleLanguageChange}>
        en
      </button>
      <p>{translate("welcome_message", language)}</p>
      <MyLibrary />
    </>
  );
};

export default Main;
