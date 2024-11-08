import Header from "./Header";




const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="h-screen w-full bg-gray-50">
            <Header />
            { children }
        </div>
    )
}


export default Layout;