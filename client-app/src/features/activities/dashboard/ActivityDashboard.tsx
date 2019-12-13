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
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <GridColumn width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails  activity={selectedActivity} setEditMode={setEditMode} />
        )}
        {editMode && (<ActivityForms />)}
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
