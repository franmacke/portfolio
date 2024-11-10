


const Card = ({ children } : { children: React.ReactNode}) => {
    return (
        <div className="flex-col p-5 rounded-md border-gray-100 bg-white border-2">
            { children }
        </div>
    )
}

export default Card;