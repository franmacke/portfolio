import BottomPage from "./Footer";
import Header from "./Header";



const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="h-full w-full bg-gray-100">
            <Header />

            <div className="h-full w-full flex justify-center items-center">
                <div className="flex-col max-w-6xl w-full h-full">
                    { children }
                </div>
            </div>

            <BottomPage />
        </div>
    )
}


export default Layout;