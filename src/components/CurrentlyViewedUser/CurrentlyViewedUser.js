import React from 'react'
import {
    makeStyles, Grid, TextField,
    Paper,
    Button
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import CloseIcon from '@material-ui/icons/Close'

import { connect } from 'react-redux'

import DefaultProfile from '../../assets/images/profile.svg'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '10px',
        margin: 'auto',
        width: '90%',
        background: '#1f1f2a',
        position: 'relative'

    },
    image: {
        position: 'relative',
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
    input: {
        color: '#f5f5f5',
        borderBottom: '1px solid #f5f5f5',
        outline: 'none'
    },
    label: {
        color: 'rgba(255,255,255,0.6) !important',
        outline: 'none'
    },
    wave: {
        '&::after': {
            background: `linear-gradient(90deg, transparent, #444 , transparent)`,
        }
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20

    }

})


const CurrentlyViewedModal = ({ currentlyViewedUser }) => {
    const classes = useStyles()

    const makeAddress = addressObj => {
        let address = ''
        for (let key in addressObj) {
            address += addressObj[key]
        }
        return address
    }

    let content = (
        <Grid container className={classes.root}>
            <Paper className={classes.paper}>
                <span className={classes.closeButton}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<CloseIcon />}
                    >
                        Close
                 </Button>
                </span>
                <Grid container justify="center" style={{ alignItems: 'center' }} spacing={2}>
                    <Grid item style={{ margin: '10px', padding: '10px' }}>                            {
                        !currentlyViewedUser ?

                            <Skeleton classes={{
                                wave: classes.wave
                            }}
                                variant="rect"
                                animation="wave"
                                className={classes.image}
                            />
                            :
                            <Grid item xs container className={classes.image} >
                                {
                                    currentlyViewedUser ?
                                        <img
                                            src={DefaultProfile}
                                            className={classes.img} alt="profile" />
                                        :
                                        <Skeleton classes={{
                                            wave: classes.wave
                                        }}
                                            variant="rect"
                                            animation="wave"
                                            height={500}
                                            width={300}
                                        />
                                }
                            </Grid>
                    }
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column">
                            <Grid item style={{ margin: '10px', padding: '10px' }}>
                                {
                                    !currentlyViewedUser ?

                                        <Skeleton classes={{
                                            wave: classes.wave
                                        }}
                                            variant="rect"
                                            animation="wave"
                                            className={classes.title}
                                        />
                                        :

                                        <TextField
                                            fullWidth
                                            readOnly={true}
                                            style={{
                                                pointerEvents: 'none'
                                            }}
                                            label="Email"
                                            value={currentlyViewedUser.email || ''}
                                            InputProps={{
                                                className: classes.input,

                                            }}
                                            InputLabelProps={{
                                                className: classes.label,
                                            }}
                                        />
                                }
                            </Grid>
                            <Grid item style={{ margin: '10px', padding: '10px' }}>
                                {
                                    !currentlyViewedUser ?

                                        <Skeleton classes={{
                                            wave: classes.wave
                                        }}
                                            variant="rect"
                                            animation="wave"
                                            className={classes.title}
                                        />
                                        :
                                        <TextField
                                            fullWidth
                                            readOnly={true}
                                            label="Name"
                                            value={currentlyViewedUser.Name}
                                            InputProps={{
                                                className: classes.input,

                                            }}
                                            InputLabelProps={{
                                                className: classes.label,
                                            }}
                                        />
                                }
                            </Grid>
                            <Grid item style={{ margin: '10px', padding: '10px' }}>
                                {
                                    !currentlyViewedUser ?

                                        <Skeleton classes={{
                                            wave: classes.wave
                                        }}
                                            variant="rect"
                                            animation="wave"
                                            className={classes.title}
                                        />
                                        :
                                        <TextField
                                            fullWidth
                                            readOnly={true}
                                            label="Phone"
                                            value={currentlyViewedUser.Phone}

                                            InputProps={{
                                                className: classes.input,

                                            }}
                                            InputLabelProps={{
                                                className: classes.label,
                                            }}
                                        />
                                }
                            </Grid>
                            <Grid item style={{ margin: '10px', padding: '10px' }}>
                                {
                                    !currentlyViewedUser ?

                                        <Skeleton classes={{
                                            wave: classes.wave
                                        }}
                                            variant="rect"
                                            animation="wave"
                                            className={classes.title}
                                        />
                                        :
                                        <TextField
                                            fullWidth
                                            readOnly={true}
                                            label="Address"
                                            value={makeAddress(currentlyViewedUser.address[0])}
                                            InputProps={{
                                                className: classes.input,

                                            }}
                                            InputLabelProps={{
                                                className: classes.label,
                                            }}
                                        />
                                }
                            </Grid>
                            {/*
                        <Grid item style={{ margin: '10px', padding: '10px' }}>
                            {
                                !currentlyViewedUser ?

                                    <Skeleton classes={{
                                        wave: classes.wave
                                    }} variant="rect" animation="wave"
                                        className={classes.title}
                                    />
                                    :
                                    <TextField
                                        fullWidth
                                        inputProps={{ readOnly: !editDetails }}
                                        value={bio}
                                        label="Bio"
                                        onChange={e =>
                                            setBio(e.target.value)
                                        }
                                        InputProps={{
                                            className: classes.input,

                                        }}
                                        InputLabelProps={{
                                            className: classes.label,
                                        }}
                                    />
                            }

                        </Grid> */}
                            {/* <Grid item style={{ margin: '10px', padding: '10px' }}>
                            {
                                !currentlyViewedUser ?
                                    null
                                    :
                                    (
                                        editDetails ?
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={async () => {
                                                    //save editDetail
                                                    //show snackbar
                                                    await props.setUserProfileDetails(
                                                        {
                                                            name,
                                                            phone,
                                                            sex,
                                                            bio
                                                        }
                                                    )
                                                    setEditDetails(false)

                                                }}
                                                style={{
                                                    background: '#1f1f2f',
                                                    color: '#f5f5f5',
                                                    fontWeight: 'bold'
                                                }}
                                                startIcon={<SaveIcon />}
                                            >
                                                Save
                                     </Button>

                                            :
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={() => {
                                                    setEditDetails(true)
                                                }}
                                                style={{
                                                    background: '#c51162',
                                                    color: '#f5f5f5',
                                                    fontWeight: 'bold'
                                                }}
                                                startIcon={<EditIcon />}
                                            >
                                                Edit Profile
                                </Button>
                                    )

                            }
                        </Grid> */}
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>

        </Grid>

    )

    return content


}

const mapStateToProps = state => {
    return {
        currentlyViewedUser: state.users.currentlyViewedUser
    }
}

export default connect(mapStateToProps)(CurrentlyViewedModal)