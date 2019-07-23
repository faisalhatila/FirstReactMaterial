import React from 'react';
import {Tabs,Paper, Tab} from '@material-ui/core';


export default ({muscles}) => {
    return (
        <div>
            <Paper>
                <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="All" />
                    {
                        muscles.map(group => 
                            <Tab label={group} />
                        )
                    }
                </Tabs>
            </Paper>
        </div>
    )
}