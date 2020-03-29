import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    progressBar: {
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className="progress-bar">
            <CircularProgress/>
        </div>
    );
}
