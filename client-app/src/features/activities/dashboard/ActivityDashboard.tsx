import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { IAcitvity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForms from "../form/ActivityForms";

interface IProps {
  activities: IAcitvity[];
  selectActivity: (id: string) => void;
  selectedActivity: IAcitvity | null;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <GridColumn width={6}>
        {selectedActivity && <ActivityDetails activity={selectedActivity} />}
        <ActivityForms />
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
