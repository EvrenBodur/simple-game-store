import tr from "./tr.json";
import en from "./en.json";

export const translate = (key: string, language: string): string => {
  let languageData: { [key: string]: string } = {};

  if (language === "tr") {
    languageData = tr;
  }
  if (language === "en") {
    languageData = en;
  }

  return languageData[key];
};
