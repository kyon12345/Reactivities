import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IAcitvity } from "../models/activity";

interface IState {
  activities: IAcitvity[];
}

const App = () => {
  const [activities, setActivities] = useState<IAcitvity[]>([]);

  useEffect(() => {
    axios
      .get<IAcitvity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
