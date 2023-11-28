import { createContext, useContext, useMemo, useState } from "react";
import {
  defaultContent,
  defaultText,
  ptBRContent,
  ptBRText,
  defaultAbout,
  ptBRAbout,
} from "./content";
import { merge } from "lodash";
import { ItemType } from "../components/Item";

const IntlContext = createContext<{
  language: string;
  availableLanguages: string[];
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  text: {
    [key: string]: string;
  };
  content: {
    [key: string]: { [key: string]: ItemType };
  };
  about: any;
}>({
  language: "",
  availableLanguages: [],
  setLanguage: () => {},
  text: {},
  content: {},
  about: "",
});

export const useIntl = () => {
  const { language, availableLanguages, setLanguage, text, content, about } =
    useContext(IntlContext);
  return {
    language,
    availableLanguages,
    setLanguage,
    text,
    content,
    about,
  };
};

const RecommendationPageProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const availableLanguages = ["en-US", "pt-BR"];
  const [language, setLanguage] = useState(
    availableLanguages?.includes(navigator.language)
      ? navigator.language
      : "en-US",
  );

  const text: { [key: string]: string } = useMemo(() => {
    switch (language) {
      case "pt-BR":
        return merge({}, defaultText, ptBRText);
      case "en-US":
      default:
        return defaultText;
    }
  }, [language]);

  const content: {
    [key: string]: { [key: string]: ItemType };
  } = useMemo(() => {
    switch (language) {
      case "pt-BR":
        return merge({}, defaultContent, ptBRContent);
      case "en-US":
      default:
        return defaultContent;
    }
  }, [language]);

  const about: any = useMemo(() => {
    switch (language) {
      case "pt-BR":
        return merge({}, defaultAbout, ptBRAbout);
      case "en-US":
      default:
        return defaultAbout;
    }
  }, [language]);

  return (
    <IntlContext.Provider
      value={{
        language,
        availableLanguages,
        setLanguage,
        text,
        content,
        about,
      }}
    >
      {children}
    </IntlContext.Provider>
  );
};

export default RecommendationPageProvider;
