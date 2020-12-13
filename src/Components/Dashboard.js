import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions, CardContent, Grid, Switch, Slider, Select, MenuItem } from "@material-ui/core";

export default function Dashboard() {
    const [quality, setQuality] = useState('normal');
    const [online, setOnline] = useState(false);
    const [volume, setVolume] = useState(20);

    const getOnline = () => {
        setOnline(!online)
    }
    const handleQuality = (event) => {
        event.preventDefault()
        setQuality(event.target.value)
        console.log(quality)
        console.log(online)
    }
    const handleVolume = (event, value) => {
        setVolume(value)
        console.log(volume)
    }

    // useEffect = () => {
    //     console.log("hello")
    // }

    return(
        <div>
            <Typography variant="h4" style={{marginTop:"10pt",marginLeft:"20pt"}}>Welcome User!</Typography>
            <Grid container justify = "center" spacing = {5} style={{marginTop:"30pt"}} >
                <Grid item xs={12} sm={3}>
                    <Card elevation={8} style={{transform: 'scale(1)', padding:"5pt", height:"147pt"}}>
                        <CardContent>
                            <Typography variant="h6">Online Mode</Typography>
                            <Typography variant="body3" color="textSecondary">
                                Is the application connected to the internet?
                            </Typography>
                            <CardActions style={{paddingLeft:"0", paddingTop:"30pt"}}>
                            <Switch
                                checked={online}
                                onChange={getOnline}
                                size="small"
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Card elevation={8} style={{transform: 'scale(1)',height:"155pt"}}>
                        <CardContent>
                        <Typography variant="h6">Master Volume</Typography>
                        <Typography variant="body3" color="textSecondary">
                                Overrides all other sound settings in this application.
                        </Typography>
                        <CardActions style={{paddingTop:"35pt"}}>
                            <Slider
                                value = {volume}
                                onChange = {handleVolume}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={0}
                                max={100}
                            />
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card elevation={8} style={{transform: 'scale(1)',height:"155pt"}}>
                        <CardContent>
                        <Typography variant="h6">Sound Quality</Typography>
                        <Typography variant="body3" color="textSecondary">
                                Manually control the music quality in the event of poor connection.
                        </Typography>
                        <CardActions style={{paddingTop:"30pt"}} >
                            <Select 
                                value={quality} 
                                onChange ={handleQuality}
                                >
                                <MenuItem value={'low'}>Low/Poor</MenuItem>
                                <MenuItem value={'normal'}>Normal</MenuItem>
                                <MenuItem value={'high'}>High</MenuItem>
                            </Select>                        
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/* <Grid container justify = "center">
            <Grid item xs={9}>
                <Card elevation={8} style={{transform: 'scale(1)'}}>
                    <CardContent>
                        <Typography variant="h6">System Notifications:</Typography>
                    </CardContent>
                </Card>
            </Grid>
            </Grid> */}
        </div>
    )
}