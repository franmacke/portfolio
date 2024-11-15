import { animated, useSpring } from "@react-spring/web";
import { useState, createRef } from "react";
import { useIsVisible } from "src/hooks/useIsVisible";


const Card = ({ children } : { children: React.ReactNode}) => {

    const ref = createRef<HTMLDivElement>();
    const isIntersecting = useIsVisible(ref);

    const [ hovered, setHovered ] = useState(false);
    const hoverSpring = useSpring({
            boxShadow: hovered ? "0 0 10px rgba(243,244,246,0.4)" : "0 0 5px rgba(243,244,246,0.1)",
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
            delay: 200
        },
    )
    

    return (
        <animated.div 
            ref={ref}
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