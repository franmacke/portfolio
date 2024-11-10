

const Section = ({ children, title } : { children?: React.ReactNode, title: string}) => {
    return (
        <div className="w-full pt-10">
            <h1 className="text-4xl font-bold text-left">{ title }</h1>
            <div className="p-3"/>
            { children }
        </div>
    )
}

export default Section;