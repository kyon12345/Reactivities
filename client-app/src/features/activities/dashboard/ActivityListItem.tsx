import React from 'react'
import { Item, Button, SegmentGroup, Segment, Icon } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';
import {format} from 'date-fns'
import ActivityListItemAttendees from './ActivityListItemAttendees';

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
    const host=activity.attendees.filter(x=>x.isHost)[0]
    return (
        <SegmentGroup>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image src="/assets/user.png" size="tiny" />
                        <Item.Content>
                            <Item.Header as="a">{activity.title}</Item.Header>
                            <Item.Description>Hosted by {host.displayName}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <Icon name="clock" />
                {format(activity.date, "h:mm a")}
                <Icon name="marker" />
                {activity.venue},{activity.city}
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendees attendees={activity.attendees} />
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    floated="right"
                    content="View"
                    color="blue"
                />
            </Segment>
        </SegmentGroup>
    );
}

export default ActivityListItem
