import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Create extends Component {
    state = {
        open : false,
    }
    
    handleToggle = () => {
        this.setState({
            open : !this.state.open
        })
    }
    render() {
        const {open} = this.state;
        return (
            <Fragment>
                <Fab size="small" onClick={this.handleToggle} aria-label="add">
                    <AddIcon />
                </Fab>
                <Dialog
                open={open}
                onClose = {this.handleToggle}
                >
                    <DialogTitle id="form-dialog-title">
                        Create a New Exercise
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please Fill the form
                        </DialogContentText>
                        <form>

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" variant="contained">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
