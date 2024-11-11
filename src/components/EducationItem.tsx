import { EducationItemProps } from "src/props/EducationProps";
import Card from "./Card";


const EducationItem = ({ name, institution, date, status, image, href }: EducationItemProps) => {
    return (
        <Card>
            <div className="flex-col">
                <a href={href} target="_blank" rel="noreferrer">
                    <div className="flex justify-center items-center space-x-5">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-20 h-20"
                        />
                        <div className="flex-col">
                            <p className="text-xl font-bold">{name}</p>
                            <h3 className="text-sm text-gray-800">{institution}</h3>
                            <p className="text-sm text-gray-600">{date} - {status}</p>
                        </div>
                    </div> 
                </a>
            </div>
        </Card>
    )
}

export default EducationItem;