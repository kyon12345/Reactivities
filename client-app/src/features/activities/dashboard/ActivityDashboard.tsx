import React, { useContext, useEffect } from "react";
import { Grid, Button, Loader } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { useState } from "react";

const ActivityDashboard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {
        loadActivities,
        loadingInitial,
        page,
        totalPages,
        setPage
    } = rootStore.activityStore;

    const [loadingNext, setLoadingNext] = useState(false);

    const handleGetNext = () => {
        setLoadingNext(true);
        setPage(page + 1);
        loadActivities().then(() => setLoadingNext(false));
    };

    useEffect(() => {
        loadActivities();
    }, [loadActivities]);

    if (loadingInitial && page === 0)
        return <LoadingComponent content="Loading activities" />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
                {!loadingNext && (
                    <Button
                        floated="right"
                        positive
                        onClick={handleGetNext}
                        content="More..."
                        disabled={page + 1 === totalPages}
                    />
                )}
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>ActivityFilter</h2>
            </Grid.Column>
            <Grid.Column width={10}>
                <Loader active={loadingNext} />
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDashboard);
