import { Button } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { CiGlobe } from "react-icons/ci";

const Header = () => {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    const changeLanguage = () => {
        const lng = currentLanguage === 'en' ? 'es' : 'en';
        i18n.changeLanguage(lng);
    };

    return (
        <header className="w-full h-14 fixed bg-slate-50 z-10">
            <div className="w-full h-full flex justify-between items-center p-5">
                <div>
                    <h1>Personal Portfolio</h1>
                </div>

                <div>
                    <Button onClick={changeLanguage} color="light">
                        <div className='flex gap-2'>
                            {currentLanguage === 'en' ? 'ES' : 'EN'}
                            <CiGlobe size={20}/>
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;