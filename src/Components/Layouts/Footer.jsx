import React from 'react';
import {Tabs,Paper, Tab} from '@material-ui/core';
export default props => {
    return (
        <div>
            <Paper>
                <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Paper>
        </div>
    )
}