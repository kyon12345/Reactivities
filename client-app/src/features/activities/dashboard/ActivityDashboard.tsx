import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { IAcitvity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForms from "../form/ActivityForms";

interface IProps {
  activities: IAcitvity[];
}

const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} />
      </Grid.Column>
      <GridColumn width={6}>
        <ActivityDetails />
        <ActivityForms />
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
