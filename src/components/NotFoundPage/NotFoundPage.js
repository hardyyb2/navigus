import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    makeStyles, Grid, Paper, Button,
    ButtonBase, Typography,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';

import PageNotFound from '../../assets/images/notfound.svg';

const styles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '10px',
        margin: 'auto',
        width: '90%',
        background: '#1f1f2a'

    },
    image: {
        width: 400,
        height: 500,
        ['@media (max-width: 500px)']: {
            width: '350px',
            height: '500px',

        },
        ['@media (max-width: 450px)']: {
            width: '300px',
            height: '400px',

        },
        ['@media (max-width: 400px)']: {
            width: '240px',
            height: '300px',

        }
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    title: {
        fontSize: '2.6rem',
        color: 'rgba(255,255,255,0.9)',
        ['@media (max-width: 500px)']: {
            fontSize: '2rem',

        },
        ['@media (max-width: 450px)']: {
            fontSize: '1.7rem',

        },
        ['@media (max-width: 400px)']: {
            fontSize: '1.4rem',

        }
    },
    subtitle: {
        fontSize: '1.8rem',
        color: 'rgba(255,255,255,0.7)',
        ['@media (max-width: 500px)']: {
            fontSize: '1.3rem',

        },
        ['@media (max-width: 450px)']: {
            fontSize: '1rem',

        },
        ['@media (max-width: 400px)']: {
            fontSize: '0.8rem',

        }
    },
    desc: {
        width: '70%',
        margin: 'auto',
        color: 'rgba(255,255,255,0.7)',
        ['@media (max-width: 500px)']: {
            fontSize: '1rem',

        },
        ['@media (max-width: 450px)']: {
            fontSize: '0.8rem',

        },
        ['@media (max-width: 400px)']: {
            fontSize: '0.6rem',

        }
    },
    price: {
        marginTop: '15px',
        padding: '8px 15px',
        fontSize: '2rem',
        color: 'rgba(255,255,255,1)',
        ['@media (max-width: 500px)']: {
            fontSize: '1.7rem',

        },
        ['@media (max-width: 450px)']: {
            fontSize: '1.3rem',

        },
        ['@media (max-width: 400px)']: {
            fontSize: '1rem',

        }

    }
})



const NotFoundPage = () => {
    const classes = styles()
    const history = useHistory()

    return (
        <Grid container style={{
            background: '#181a1b', alignItems: 'center'
        }} >
            <div className={classes.root
            } >
                <Paper className={classes.paper}>
                    <Grid container justify="center" style={{ alignItems: 'center' }} spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image} >
                                <img className={classes.img} alt="complex" src={PageNotFound} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" className={classes.title}>
                                        Congratulations
                                    </Typography>
                                    <Typography variant="body2" gutterBottom className={classes.subtitle}>
                                        You broke the thing
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.desc}>
                                        The page you are looking for is not available.
                                    </Typography>
                                </Grid>
                                <Grid item xs container spacing={3} direction="row" justify="center">
                                    <Grid item>
                                        <Button
                                            aria-label="Go Home"
                                            onClick={() => history.replace('/')}
                                            startIcon={<HomeIcon />}
                                            variant="contained"
                                            style={{
                                                fontWeight: 'bold',
                                                padding: '10px',
                                                background: '#c51162',
                                                color: 'rgba(255,255,255,0.9)'
                                            }}

                                        >
                                            Back to Home
                                     </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>

            </div>
        </Grid>
    )
}

export default NotFoundPage;