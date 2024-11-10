

const Section = ({ children, title } : { children?: React.ReactNode, title: string}) => {
    return (
        <div className="w-full">
            <h1 className="text-4xl font-bold text-left">{ title }</h1>
            { children }
        </div>
    )
}

export default Section;