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

export default ({exercises}) => {
    return (
        <Grid container>
            <Grid item sm={3}>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) => {
                        return (
                            <div>
                                <Typography
                                    variant="h6"
                                    style={{textTransform : "capitalize"}}
                                >
                                    {group}
                                </Typography>
                                <List component="nav">
                                    {
                                        exercises.map(({title, exercise}) => {
                                            return (
                                                <ListItem button>
                                                    <ListItemText primary={title} />
                                                </ListItem>
        
                                            )
                                        })
                                    }
                                </List>
                            </div>
                        )
                    })}
                </Paper>
            </Grid>
            <Grid item sm={9}>
            <Paper style={styles.Paper}>
                    <Typography
                        variant="h5"
                    >
                        Welcome!
                    </Typography>
                    <Typography
                        variant="h6"
                        style={{marginTop : 20}}
                    >
                        Please Select an exercise from the left.
                    </Typography>
                </Paper>
            </Grid>
            
        </Grid>
    )
}