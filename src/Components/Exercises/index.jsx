import React from 'react';
import { Grid, Paper, Typography, List, ListItemText, ListItem } from '@material-ui/core';

const styles = {
    Paper : {
        padding : 20,
        marginTop : 10,
        marginBottom : 10,
        height : 500,
        overflowY : 'auto',
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise : {
        id,
        title = 'Welcome!',
        description = 'Please Select an exercise from the left.',
    }
}) => {
    return (
        <Grid container>
            <Grid item sm={3}>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) => {
                        return (
                            !category || category === group
                                ? <div key = {group}>
                                    <Typography
                                        variant="h6"
                                        style={{textTransform : "capitalize"}}
                                    >
                                        {group}
                                    </Typography>
                                    <List component="nav">
                                        {
                                            exercises.map(({id, title}) => {
                                                return (
                                                    <ListItem
                                                        key = {id}
                                                        button
                                                        onClick = {() => onSelect(id)}>
                                                        <ListItemText
                                                        primary={title}
                                                        onClick = {() => onSelect(id)} 
                                                        />
                                                    </ListItem>
            
                                                )
                                            })
                                        }
                                    </List>
                                </div>
                                : null
                        )
                    })}
                </Paper>
            </Grid>
            <Grid item sm={9}>
            <Paper style={styles.Paper}>
                    <Typography
                        variant="h5"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h6"
                        style={{marginTop : 20}}
                    >
                        {description}
                    </Typography>
                </Paper>
            </Grid>
            
        </Grid>
    )
}