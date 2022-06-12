import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { translate } from "../i18n";

const MyLibrary: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const { user } = useSelector((state: RootState) => state.auth);
  return <div>MY LIBRARY</div>;
};

export default MyLibrary;
