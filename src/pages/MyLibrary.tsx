import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { translate } from "../i18n";

const MyLibrary: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.language);
  return <div>{translate("welcome_message", language)}</div>;
};

export default MyLibrary;
