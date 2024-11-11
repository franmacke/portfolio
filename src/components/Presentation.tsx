import { useTranslation } from "react-i18next";
import { useSpring, animated } from '@react-spring/web'

const Presentation = () => {
  const { t } = useTranslation();
  const props = useSpring({ opacity: 1, x: 0, from: { opacity: 0, x: -100 } })

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <animated.h1 className="text-7xl font-bold" style={{...props}}>Franco Macke</animated.h1>
      <animated.h2 className="text-2xl" style={{...props}}>{t("presentation.description")}</animated.h2>
    </div>
  );
}

export default Presentation;