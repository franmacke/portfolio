import { Button } from 'flowbite-react';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    const changeLanguage = () => {
        const lng = currentLanguage === 'en' ? 'es' : 'en';
        i18n.changeLanguage(lng);
    };

    return (
        <header className="w-full h-14 fixed bg-slate-50">
            <div className="w-full h-full flex justify-between items-center p-5">
                <div>
                    <h1>Personal Portfolio</h1>
                </div>

                <div>
                    <Button onClick={changeLanguage} color="light">
                        {currentLanguage === 'en' ? 'ES' : 'EN'}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;