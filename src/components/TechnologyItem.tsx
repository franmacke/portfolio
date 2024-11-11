import { TechnologyProps } from 'src/props/TechnologyProps';
import Card from './Card';



const TechnologyItem = ({ technology }: { technology: TechnologyProps}) => {

    return (
        <Card>
            <div className='flex-col space-y-2'>
                <div className="flex items-center justify-start gap-2">
                    {technology.icon}
                    <h3 className='font-bold text-xl'>{technology.name}</h3>
                </div>
                <p className="text-left text-gray-500">
                    {technology.description}
                </p>
            </div> 
        </Card>
    );
};

export default TechnologyItem;