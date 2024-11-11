import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";


const Card = ({ children } : { children: React.ReactNode}) => {

    const [ hovered, setHovered ] = useState(false);
    const hoverSpring = useSpring({
        boxShadow: hovered ? "0 0 10px rgba(243,244,246,0.4)" : "0 0 5px rgba(243,244,246,0.1)"
    })
    

    return (
        <animated.div 
            className="flex-col p-5 rounded-md border-gray-200 bg-white border-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{...hoverSpring}}
        >
            { children }
        </animated.div>
    )
}

export default Card;