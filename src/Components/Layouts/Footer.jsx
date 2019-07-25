import React from 'react';
import {Tabs,Paper, Tab} from '@material-ui/core';


export default ({muscles, category, onSelect, exercise}) => {

    const index = category
    ? muscles.findIndex(group =>group === category) + 1
    : 0

    const onSelectIndex = (e, index) => {
        onSelect(index ===0 ? '' : muscles[index-1])
    }

    return (
        <div>
            <Paper>
                <Tabs
                    value={index}
                    onChange = {onSelectIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="All" />
                    {
                        muscles.map(group => 
                            <Tab key ={group} label={group} />
                        )
                    }
                </Tabs>
            </Paper>
        </div>
    )
}