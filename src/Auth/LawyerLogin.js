
import React from 'react';
import {
    Grid,
    TextField,
    Paper,
    Button
} from '@material-ui/core';
import { user } from "../Data/UserData"
import { SET_Lawyer } from "../Reducer/loadData"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const LawyerLogin = () => {
    const [userName, setuserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    // const [stateLawyer, dispatchLawyer] = React.useReducer(
    //     setForSingleLawyers,
    //     {}
    // );

    const submitLawyer = () => {
        console.log("exists submitLawyer")
        var exists = user.filter(function (o) {
            return o.user === userName && o.password === password && o.type === "lawyer"
        })
        console.log(exists, exists.length)
        const matches = exists.length
        if (matches === 1) {
            localStorage.setItem("currentUser", exists[0].type + "_" + exists[0].user)
            dispatch(SET_Lawyer(exists[0]));
            history.replace("/Lawyer-Dashboard")
        }

    }

    return (
        <div style={{ padding: 30 }}>
            <h1>Lawyer Login</h1>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            value={userName}
                            onChange={(e) => {
                                setuserName(e.target.value)
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type={'password'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            onClick={submitLawyer}
                        > Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default LawyerLogin;
