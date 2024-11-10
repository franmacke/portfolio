import { Timeline, List } from "flowbite-react";
import { ExperienceItemProps } from "../props/ExperienceProps";
import Card from "./Card";
import { Badge } from "flowbite-react";


const ExperienceItem = ({ data }: { data: ExperienceItemProps }) => {

    return (
        <Timeline.Item>
            <Timeline.Point/>

                <Timeline.Content>
                    <Timeline.Time className="text-lg">{data.time[0]} - {data.time[1]}</Timeline.Time>
                    <Card>
                        <div className="flex space-x-2">
                            <Timeline.Title className="font-bold">{data.title}</Timeline.Title>
                            <Timeline.Title className="text-gray-500">{data.company}</Timeline.Title>
                        </div>
                        <Timeline.Body>
                            {data.description}
                        </Timeline.Body>
                        <Timeline.Body>
                            <List>
                                {data.responsibilities.map((responsibility, index) => (
                                    <List.Item key={index}>{responsibility}</List.Item>
                                ))}
                            </List>
                        </Timeline.Body>
                        {data.technologies && (
                            <Timeline.Body className="flex space-x-2">
                                {data.technologies.map((tech, index) => (
                                    <Badge key={index} color="dark" size="xs">{tech}</Badge>
                                ))}
                            </Timeline.Body>
                        )}
                    </Card>
                </Timeline.Content>
        </Timeline.Item>

    )
}

export default ExperienceItem;