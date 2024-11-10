import { useTranslation } from "react-i18next";


const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-7xl font-bold">Franco Macke</h1>
      <h2 className="text-2xl">{t("presentation.description")}</h2>
    </div>
  );
}

export default Presentation;